import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Page from './page'

describe('portfolio page', () => {
  it('renders the portfolio main landmark and owner name', () => {
    render(<Page />)

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Dulan Prabashwara/i }),
    ).toBeInTheDocument()
  })
})
