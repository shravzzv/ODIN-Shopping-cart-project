import { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/components/ProductCard.css'
import { Link, useLocation } from 'react-router-dom'

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
}

export default function ProductCard({ id, title, images, price }) {
  const { pathname } = useLocation()
  const [imgSrc, setImgSrc] = useState(images[3])

  const addToCart = (e) => {
    e.preventDefault()
  }

  return (
    <Link to={`/product/${id}`}>
      <div className='card elevated productCard'>
        <img
          src={imgSrc}
          alt={title}
          onMouseOver={() => setImgSrc(images[0])}
          onMouseLeave={() => setImgSrc(images[3])}
        />
        <div className='content'>
          <p className='title'>{title}</p>
          {pathname === '/shop' && <p>$ {price}</p>}
          <button className='text' onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  )
}
