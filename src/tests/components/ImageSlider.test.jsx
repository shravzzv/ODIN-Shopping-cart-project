import { describe, test, expect, beforeEach } from 'vitest'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import ImageSlider from '../../components/ImageSlider'

const images = [
  '/products/suit1a.webp',
  '/products/suit1b.webp',
  '/products/suit1c.webp',
  '/products/suit1d.webp',
]
const alt = 'Black suit'

beforeEach(() => {
  render(
    <MemoryRouter>
      <ImageSlider images={images} alt={alt} />
    </MemoryRouter>
  )
})

describe('Image slider', () => {
  test('should contain 4 images', () => {
    expect(screen.getAllByRole('img')).toHaveLength(4)
  })

  test('should display bottom navigation', () => {
    expect(screen.getAllByRole('radio')).toHaveLength(4)
  })

  test('images should slide on clicking the navigation buttons', async () => {
    const user = userEvent.setup()

    const slider = screen.getByTestId('slider')
    expect(slider).toBeInTheDocument()
    expect(slider.style.transform).toBe('translateX(-0%)')

    const firstNav = screen.getAllByRole('radio')[0]
    const secondNav = screen.getAllByRole('radio')[1]
    const thirdNav = screen.getAllByRole('radio')[2]
    const fourthNav = screen.getAllByRole('radio')[3]

    await user.click(secondNav)
    expect(slider.style.transform).toBe('translateX(-100%)')
    expect(secondNav.checked).toBe(true)

    await user.click(firstNav)
    expect(slider.style.transform).toBe('translateX(-0%)')
    expect(firstNav.checked).toBe(true)

    await user.click(fourthNav)
    expect(slider.style.transform).toBe('translateX(-300%)')
    expect(fourthNav.checked).toBe(true)

    await user.click(thirdNav)
    expect(slider.style.transform).toBe('translateX(-200%)')
    expect(thirdNav.checked).toBe(true)
  })

  // todo: test for swipe functionality
})
