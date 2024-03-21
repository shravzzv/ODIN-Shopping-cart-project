import '../styles/pages/Shop.css'
import products from '../assets/data.json'
import ProductCard from '../components/ProductCard.jsx'
import PropTypes from 'prop-types'

Shop.propTypes = {
  cartItems: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default function Shop({ cartItems, addToCart }) {
  return (
    <main className='shop'>
      <div className='productsContainer'>
        {products.map(({ id, title, images, price }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            images={images}
            price={price}
            isInCart={cartItems.some((item) => item.id === id)}
            addToCart={addToCart}
          />
        ))}
      </div>
    </main>
  )
}
