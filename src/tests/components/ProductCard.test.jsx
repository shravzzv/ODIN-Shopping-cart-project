import { describe, test, expect, beforeEach } from 'vitest'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductCard from '../../components/ProductCard.jsx'

const images = [
  '/products/suit1a.webp',
  '/products/suit1b.webp',
  '/products/suit1c.webp',
  '/products/suit1d.webp',
]

describe('ProductCard', () => {
  describe('should have the correct structure', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <ProductCard
            id={1}
            title='Midnight Blue Tuxedo'
            images={images}
            price={499}
          />
        </MemoryRouter>
      )
    })

    test('should show an image, a title and a add to cart button', () => {
      expect(screen.getByRole('img')).toBeInTheDocument()
      expect(screen.getByText('Midnight Blue Tuxedo')).toBeInTheDocument()
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    test('should contain a link to the product', () => {
      const link = screen.getByRole('link')
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '/product/1')
    })
  })
})
