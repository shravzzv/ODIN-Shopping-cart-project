import { describe, test, expect, beforeEach } from 'vitest'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductCard from '../../components/ProductCard.jsx'

describe('ProductCard', () => {
  describe('should have the correct structure', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <ProductCard
            id={1}
            imgSrc='/products/suit1a.webp'
            title='Midnight Blue Tuxedo'
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
