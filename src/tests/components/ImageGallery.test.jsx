import { describe, test, expect, beforeEach } from 'vitest'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import ImageGallery from '../../components/ImageGallery'

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
      <ImageGallery images={images} alt={alt} />
    </MemoryRouter>
  )
})

describe('Image gallery', () => {
  test('should contain 5 images', () => {
    expect(screen.getAllByRole('img')).toHaveLength(5)
  })

  test('should display the selected image as the display image', async () => {
    const user = userEvent.setup()

    const firstImg = screen.getAllByRole('img')[0]
    const secondImg = screen.getAllByRole('img')[1]
    const thirdImg = screen.getAllByRole('img')[2]
    const fourthImg = screen.getAllByRole('img')[3]

    const displayImg = screen.getAllByRole('img')[4]

    expect(displayImg.src).toEqual(firstImg.src)
    expect(firstImg).toHaveClass('selected')

    await user.click(secondImg)
    expect(displayImg.src).toEqual(secondImg.src)
    expect(displayImg.src).not.toEqual(firstImg.src)
    expect(displayImg.src).not.toEqual(thirdImg.src)
    expect(displayImg.src).not.toEqual(fourthImg.src)
    expect(secondImg).toHaveClass('selected')

    await user.click(thirdImg)
    expect(displayImg.src).toEqual(thirdImg.src)
    expect(displayImg.src).not.toEqual(firstImg.src)
    expect(displayImg.src).not.toEqual(secondImg.src)
    expect(displayImg.src).not.toEqual(fourthImg.src)
    expect(thirdImg).toHaveClass('selected')

    await user.click(fourthImg)
    expect(displayImg.src).toEqual(fourthImg.src)
    expect(displayImg.src).not.toEqual(firstImg.src)
    expect(displayImg.src).not.toEqual(secondImg.src)
    expect(displayImg.src).not.toEqual(thirdImg.src)
    expect(fourthImg).toHaveClass('selected')

    await user.click(firstImg)
    expect(displayImg.src).toEqual(firstImg.src)
    expect(displayImg.src).not.toEqual(secondImg.src)
    expect(displayImg.src).not.toEqual(thirdImg.src)
    expect(displayImg.src).not.toEqual(fourthImg.src)
    expect(firstImg).toHaveClass('selected')
  })
})
