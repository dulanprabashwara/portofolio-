import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Page from './page'

describe('portfolio page', () => {
  it('composes sections in required order', () => {
    const { container } = render(<Page />)
    expect(
      Array.from(container.querySelectorAll('main > section[id]')).map((n) => n.id)
    ).toEqual([
      'hero',
      'technology',
      'about',
      'projects',
      'toolkit',
      'approach',
      'journey',
      'recognition',
      'beyond-code',
      'contact',
    ])
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
