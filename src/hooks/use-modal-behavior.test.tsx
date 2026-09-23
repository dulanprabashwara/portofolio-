import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRef, useState } from 'react'
import { describe, expect, it } from 'vitest'
import { useModalBehavior } from './use-modal-behavior'

function HarnessModal({
  id,
  open,
  onClose,
  triggerRef,
}: {
  id: string
  open: boolean
  onClose: () => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  useModalBehavior({ open, onClose, containerRef, triggerRef })

  if (!open) return null

  return (
    <div ref={containerRef} role="dialog" aria-label={`Modal ${id}`}>
      <button onClick={onClose}>Close {id}</button>
      <a href="#test">Link {id}</a>
    </div>
  )
}

function SequentialHarness() {
  const [modal1Open, setModal1Open] = useState(false)
  const [modal2Open, setModal2Open] = useState(false)
  const trigger1Ref = useRef<HTMLButtonElement>(null)
  const trigger2Ref = useRef<HTMLButtonElement>(null)

  return (
    <div>
      <button ref={trigger1Ref} onClick={() => setModal1Open(true)}>
        Open 1
      </button>
      <button ref={trigger2Ref} onClick={() => setModal2Open(true)}>
        Open 2
      </button>
      <HarnessModal
        id="1"
        open={modal1Open}
        onClose={() => setModal1Open(false)}
        triggerRef={trigger1Ref}
      />
      <HarnessModal
        id="2"
        open={modal2Open}
        onClose={() => setModal2Open(false)}
        triggerRef={trigger2Ref}
      />
    </div>
  )
}

describe('useModalBehavior', () => {
  it('manages scroll locking and restoration sequentially for two overlays', async () => {
    const user = userEvent.setup()
    const initialOverflow = document.body.style.overflow

    render(<SequentialHarness />)

    // Open first modal
    await user.click(screen.getByRole('button', { name: 'Open 1' }))
    expect(document.body.style.overflow).toBe('hidden')
    expect(screen.getByRole('dialog', { name: 'Modal 1' })).toBeInTheDocument()

    // Close first modal
    await user.click(screen.getByRole('button', { name: 'Close 1' }))
    expect(document.body.style.overflow).toBe(initialOverflow)
    expect(screen.getByRole('button', { name: 'Open 1' })).toHaveFocus()

    // Open second modal
    await user.click(screen.getByRole('button', { name: 'Open 2' }))
    expect(document.body.style.overflow).toBe('hidden')
    expect(screen.getByRole('dialog', { name: 'Modal 2' })).toBeInTheDocument()

    // Close second modal via Escape
    await user.keyboard('{Escape}')
    expect(document.body.style.overflow).toBe(initialOverflow)
    expect(screen.getByRole('button', { name: 'Open 2' })).toHaveFocus()
  })

  it('traps focus within the container', async () => {
    const user = userEvent.setup()
    render(<SequentialHarness />)

    await user.click(screen.getByRole('button', { name: 'Open 1' }))
    const closeBtn = screen.getByRole('button', { name: 'Close 1' })
    const link = screen.getByRole('link', { name: 'Link 1' })

    expect(closeBtn).toHaveFocus()

    await user.tab()
    expect(link).toHaveFocus()

    await user.tab()
    expect(closeBtn).toHaveFocus()

    await user.tab({ shift: true })
    expect(link).toHaveFocus()
  })
})
