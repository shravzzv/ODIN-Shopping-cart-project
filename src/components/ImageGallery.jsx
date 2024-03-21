import PropTypes from 'prop-types'
import '../styles/components/ImageGallery.css'
import { useState } from 'react'

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  alt: PropTypes.string.isRequired,
}

export default function ImageGallery({ images, alt }) {
  const [selectedIdx, setSelectedIdx] = useState(0)

  return (
    <div className='imageGallery'>
      <div className='left'>
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={alt}
            onClick={() => setSelectedIdx(idx)}
            className={selectedIdx == idx ? 'selected' : ''}
          />
        ))}
      </div>
      <div className='right'>
        <img src={images[selectedIdx]} alt={alt} />
      </div>
    </div>
  )
}
