import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { projects } from '@/data/projects'
import { ProjectCard } from './project-card'
import { ProjectList } from './project-list'

describe('ProjectList and ProjectCard', () => {
  it('renders six projects in order and opens a case study', async () => {
    const user = userEvent.setup()
    render(<ProjectList />)

    expect(screen.getAllByRole('heading', { level: 3 }).map((n) => n.textContent)).toEqual([
      'EasyBlogger',
      'MediSync',
      'Ceylon News',
      'FoundIt',
      'BotNexus',
      'Pacman Live',
    ])

    const openButton = screen.getAllByRole('button', { name: /Open EasyBlogger case study/i })[0]
    await user.click(openButton)

    const dialog = screen.getByRole('dialog', { name: 'EasyBlogger' })
    expect(dialog).toBeInTheDocument()

    // Inner click stays open
    const innerHeading = screen.getByRole('heading', { level: 2, name: 'EasyBlogger' })
    await user.click(innerHeading)
    expect(screen.getByRole('dialog', { name: 'EasyBlogger' })).toBeInTheDocument()

    // Closes on Escape and restores focus
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: 'EasyBlogger' })).not.toBeInTheDocument()
    expect(openButton).toHaveFocus()
  })

  it('external action does not open the case study', async () => {
    const onOpen = vi.fn()
    const user = userEvent.setup()
    render(
      <ProjectCard
        project={{ ...projects[0], liveUrl: 'https://demo.example.org' }}
        index={0}
        onOpen={onOpen}
      />
    )

    await user.click(screen.getByRole('link', { name: /live site/i }))
    expect(onOpen).not.toHaveBeenCalled()
  })

  it('closes dialog on backdrop click', async () => {
    const user = userEvent.setup()
    render(<ProjectList />)

    const openButton = screen.getAllByRole('button', { name: /Open EasyBlogger case study/i })[0]
    await user.click(openButton)
    const dialog = screen.getByRole('dialog', { name: 'EasyBlogger' })

    // Clicking the backdrop (outer dialog container)
    await user.click(dialog)
    expect(screen.queryByRole('dialog', { name: 'EasyBlogger' })).not.toBeInTheDocument()
  })
})
