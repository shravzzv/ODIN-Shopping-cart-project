import { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/components/ProductCard.css'
import { Link, useLocation } from 'react-router-dom'

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  isInCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default function ProductCard({
  id,
  title,
  images,
  price,
  isInCart,
  addToCart,
}) {
  const { pathname } = useLocation()
  const [imgSrc, setImgSrc] = useState(images[3])

  const handleAddToCart = (e) => {
    // this is to prevent the button click to be interpreted as a link click since the whole card is a link; e.stopPropagation() doesn't prevent this!
    e.preventDefault()

    addToCart(id, 1)
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
          <button
            className='text'
            onClick={handleAddToCart}
            disabled={isInCart}
          >
            {isInCart ? 'Added' : 'Add'} to cart
          </button>
        </div>
      </div>
    </Link>
  )
}
