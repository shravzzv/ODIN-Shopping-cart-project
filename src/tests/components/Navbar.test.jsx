import { describe, test, expect } from 'vitest'
import Navbar from '../../components/Navbar'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

describe('Navbar', () => {
  describe('should have the correct structure', () => {
    test('should show three links', () => {
      render(
        <MemoryRouter>
          <Navbar cartItemsCount={1} />
        </MemoryRouter>
      )
      expect(screen.getAllByRole('link')).toHaveLength(3)
    })

    test('the three links should be for home, shop and cart', () => {
      render(
        <MemoryRouter>
          <Navbar cartItemsCount={1} />
        </MemoryRouter>
      )

      const homeLink = screen.getByRole('link', { name: /home/i })
      const shopLink = screen.getByRole('link', { name: /shop/i })
      const cartLink = screen.getByRole('link', { name: /cart/i })

      expect(homeLink).toBeInTheDocument()
      expect(shopLink).toBeInTheDocument()
      expect(cartLink).toBeInTheDocument()
      expect(homeLink).toHaveAttribute('href', '/')
      expect(shopLink).toHaveAttribute('href', '/shop')
      expect(cartLink).toHaveAttribute('href', '/cart')
    })
  })

  describe('should have the correct functionality', () => {
    test('should show the active link when clicked', async () => {
      const user = userEvent.setup()

      const { container } = render(
        <MemoryRouter>
          <Navbar cartItemsCount={1} />
        </MemoryRouter>
      )

      expect(container).toMatchSnapshot()

      const homeLink = screen.getByRole('link', { name: /home/i })
      const shopLink = screen.getByRole('link', { name: /shop/i })
      const cartLink = screen.getByRole('link', { name: /cart/i })

      expect(homeLink).toHaveClass('active')
      expect(shopLink).not.toHaveClass('active')
      expect(cartLink).not.toHaveClass('active')

      await user.click(shopLink)
      expect(homeLink).not.toHaveClass('active')
      expect(shopLink).toHaveClass('active')
      expect(cartLink).not.toHaveClass('active')

      await user.click(cartLink)
      expect(homeLink).not.toHaveClass('active')
      expect(shopLink).not.toHaveClass('active')
      expect(cartLink).toHaveClass('active')

      await user.click(homeLink)
      expect(homeLink).toHaveClass('active')
      expect(shopLink).not.toHaveClass('active')
      expect(cartLink).not.toHaveClass('active')
    })

    test('should be floating when the window is scrolled', async () => {
      const { container } = render(
        <MemoryRouter>
          <Navbar cartItemsCount={1} />
        </MemoryRouter>
      )

      expect(container).toMatchSnapshot()

      const nav = screen.getByRole('navigation')
      expect(nav).not.toHaveClass('floating')

      // Simulate a scroll event using fireEvent.scroll
      await fireEvent.scroll(window, { target: { scrollY: 300 } })
      expect(nav).toHaveClass('floating')

      // Should not be floating when the window is not scrolled
      await fireEvent.scroll(window, { target: { scrollY: 0 } })
      expect(nav).not.toHaveClass('floating')
    })

    test('should not show cart items count if it is zero', () => {
      const { container } = render(
        <MemoryRouter>
          <Navbar cartItemsCount={0} />
        </MemoryRouter>
      )

      expect(container).toMatchSnapshot()

      expect(screen.queryByTestId('badgeContainer')).not.toBeInTheDocument()
      expect(screen.queryByTestId('badgeLabel')).not.toBeInTheDocument()
    })

    test('should show cart items count if it is greater than 0', () => {
      const { container } = render(
        <MemoryRouter>
          <Navbar cartItemsCount={1} />
        </MemoryRouter>
      )

      expect(container).toMatchSnapshot()

      expect(screen.queryByTestId('badgeContainer')).toBeInTheDocument()
      const labelCount = screen.queryByTestId('badgeLabel')
      expect(labelCount).toBeInTheDocument()
      expect(labelCount.textContent).toMatch('1')
    })

    test('should show cart items count as 999+ if it is >= 1000', () => {
      const { container } = render(
        <MemoryRouter>
          <Navbar cartItemsCount={1000} />
        </MemoryRouter>
      )

      expect(container).toMatchSnapshot()

      expect(screen.queryByTestId('badgeContainer')).toBeInTheDocument()
      const labelCount = screen.queryByTestId('badgeLabel')
      expect(labelCount).toBeInTheDocument()
      expect(labelCount.textContent).toMatch('999+')
    })
  })
})
