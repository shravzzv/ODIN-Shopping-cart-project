import { describe, test, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import CartCard from '../../components/CartCard'

describe('Cart card', () => {
  test('should display an image, a title, a price, a quantity and a remove button', () => {
    render(
      <MemoryRouter>
        <CartCard
          id={1}
          image='/products/suit1a.webp'
          title='Midnight Black Tuxedo'
          quantity={2}
          price={599}
        />
      </MemoryRouter>
    )
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('img').alt).toBe('Midnight Black Tuxedo')

    expect(screen.getByText('Midnight Black Tuxedo')).toBeInTheDocument()
    expect(screen.getByText('Midnight Black Tuxedo')).toHaveClass('title')

    expect(screen.getByText('$599')).toBeInTheDocument()
    expect(screen.getByText('$599')).toHaveClass('price')

    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('2')).toHaveClass('badgeLabel')

    expect(screen.getByRole('button', { name: /remove/i })).toBeInTheDocument()
  })

  test('should display the quantity as 999+ if the quantity is > 999', () => {
    const { container } = render(
      <MemoryRouter>
        <CartCard
          id={1}
          image='/products/suit1a.webp'
          title='Midnight Black Tuxedo'
          quantity={2000}
        />
      </MemoryRouter>
    )

    expect(container).toMatchSnapshot()
    expect(screen.getByText('999+')).toBeInTheDocument()
    expect(screen.queryByText('2000')).not.toBeInTheDocument()
  })
})
