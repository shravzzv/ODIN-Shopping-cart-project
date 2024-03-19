import '../styles/components/CartCard.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

CartCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
}

export default function CartCard({ id, image, title, quantity, price }) {
  const handleRemove = () => {}

  return (
    <div className='card elevated cartCard'>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <p className='price'>${price}</p>
        <button className='filled-tonal' onClick={handleRemove}>
          Remove
        </button>
        <div className='badgeContainer'>
          <span className='badgeLabel'>
            {quantity >= 1000 ? '999+' : quantity}
          </span>
        </div>
      </div>
    </div>
  )
}
