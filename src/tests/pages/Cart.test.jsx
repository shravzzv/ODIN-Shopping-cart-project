import { describe, test, expect, vitest, vi } from 'vitest'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Cart from '../../pages/Cart'

const cartItems = [
  {
    id: 1,
    title: 'Midnight Black Tuxedo',
    quantity: 2,
    image: '/products/suit1a.webp',
    price: 599,
  },
  {
    id: 2,
    title: 'Satin Blue Suit',
    quantity: 9991,
    image: '/products/suit2a.webp',
    price: 499,
  },
  {
    id: 3,
    title: 'Navy Black Pinstripe Suit',
    quantity: 2,
    image: '/products/suit3a.webp',
    price: 549,
  },
  {
    id: 4,
    title: 'Burgundy Velvet Tuxedo',
    quantity: 99,
    image: '/products/suit4a.webp',
    price: 699,
  },
  {
    id: 5,
    title: 'Slate Gray Three-Piece Suit',
    quantity: 8,
    image: '/products/suit5a.webp',
    price: 649,
  },
]

vi.mock('../../components/CartCard.jsx', () => ({
  default: vitest.fn(() => <div>Mocked CartCard</div>),
}))

describe('Cart', () => {
  test('should display cart items, amount and the checkout button when cart items length > 0', () => {
    render(
      <MemoryRouter>
        <Cart items={cartItems} />
      </MemoryRouter>
    )

    // Expect 5 mocked CartCards (one for each item)
    expect(screen.getAllByText('Mocked CartCard')).toHaveLength(5)

    expect(
      screen.getByRole('button', { name: /checkout/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /amount/i })).toBeInTheDocument()

    vi.clearAllMocks()
  })

  test('should display a link to shop when there are no cart items', () => {
    render(
      <MemoryRouter>
        <Cart items={[]} />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: /go to shop/i })).toHaveAttribute(
      'href',
      '/shop'
    )
  })
})
