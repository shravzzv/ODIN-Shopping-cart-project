import PropTypes from 'prop-types'
import '../styles/components/ImageSlider.css'
import { useState } from 'react'

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  alt: PropTypes.string.isRequired,
}

export default function ImageSlider({ images, alt }) {
  const [slideBy, setSlideBy] = useState(0)

  let initialX, initialTime
  const handleTouchStart = (e) => {
    initialX = e.touches[0].clientX
    initialTime = new Date()
  }
  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - initialX
    const deltaTime = new Date() - initialTime
    if (deltaTime > 500) return

    if (Math.abs(deltaX) > 30) {
      if (deltaX >= 0) {
        // * swipe from left to right
        if (slideBy == 0) return
        setSlideBy((idx) => idx - 1)
      } else {
        // * swipe from right to left
        if (slideBy == images.length - 1) return
        setSlideBy((idx) => idx + 1)
      }
    }
  }

  return (
    <>
      <div
        className='imageSlider'
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className='slides'
          style={{
            transform: `translateX(-${100 * slideBy}%)`,
          }}
          data-testid='slider'
        >
          {images.map((image, idx) => (
            <img key={idx} src={image} alt={alt} />
          ))}
        </div>
      </div>
      <form className='sliderNavigation'>
        {images.map((__, idx) => (
          <input
            key={idx}
            type='radio'
            name='imageSliderButton'
            checked={slideBy === idx}
            onChange={() => setSlideBy(idx)}
          />
        ))}
      </form>
    </>
  )
}
