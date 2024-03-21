import { describe, test, expect, beforeEach } from 'vitest'
import { screen, render } from '@testing-library/react'
import Error from '../../pages/Error'
import { MemoryRouter } from 'react-router-dom'

beforeEach(() => {
  render(
    <MemoryRouter>
      <Error />
    </MemoryRouter>
  )
})

describe('Error page', () => {
  test('should contain a link to the home page', () => {
    const homeLink = screen.getByRole('link', { name: /home/i })
    expect(homeLink.getAttribute('href')).toMatch('/')
  })

  test('should contain a 404 message', () => {
    expect(screen.getByText(/404/i)).toBeInTheDocument()
  })
})
