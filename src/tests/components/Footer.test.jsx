import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Footer from '../../components/Footer.jsx'

describe('Footer', () => {
  test('should show info and links', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    expect(container).toMatchSnapshot()
  })
})
