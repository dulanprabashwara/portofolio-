import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { projects } from '@/data/projects'
import { ProjectActions } from './project-actions'

describe('ProjectActions component', () => {
  it('never renders Pacman deployment actions', () => {
    render(<ProjectActions project={projects[5]} />)
    expect(screen.queryByRole('link', { name: /live site|repository/i })).not.toBeInTheDocument()
  })

  it.each([null, '', '   '])('omits invalid URL %p', (liveUrl) => {
    render(<ProjectActions project={{ ...projects[0], liveUrl }} />)
    expect(screen.queryByRole('link', { name: /live site/i })).not.toBeInTheDocument()
  })

  it('renders valid live site and repository links', () => {
    render(
      <ProjectActions
        project={{
          ...projects[0],
          liveUrl: 'https://demo.example.org',
          repositoryUrl: 'https://github.com/example/repo',
        }}
      />
    )
    expect(screen.getByRole('link', { name: /live site/i })).toHaveAttribute(
      'href',
      'https://demo.example.org'
    )
    expect(screen.getByRole('link', { name: /repository/i })).toHaveAttribute(
      'href',
      'https://github.com/example/repo'
    )
  })
})
