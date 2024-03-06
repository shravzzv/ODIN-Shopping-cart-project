import { Link } from 'react-router-dom'
import '../styles/components/ProductCard.css'
import PropTypes from 'prop-types'

ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default function ProductCard({ imgSrc, title, id }) {
  return (
    <Link to={`/product/${id}`}>
      <div className='card elevated product'>
        <img src={imgSrc} alt={title} />
        <div className='content'>
          <p className='title'>{title}</p>
          <button className='text'>Add to cart</button>
        </div>
      </div>
    </Link>
  )
}
