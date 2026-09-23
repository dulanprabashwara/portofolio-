import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Toolkit } from './toolkit'

describe('Toolkit component', () => {
  it('renders skills without proficiency claims', () => {
    render(<Toolkit />)
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('WebSocket/STOMP')).toBeInTheDocument()
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    expect(screen.queryByText(/%|years? of experience/i)).not.toBeInTheDocument()
  })
})
