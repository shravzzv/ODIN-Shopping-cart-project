import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import '../styles/pages/Home.css'
import products from '../assets/data.json'
import PropTypes from 'prop-types'

Home.propTypes = {
  cartItems: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default function Home({ cartItems, addToCart }) {
  return (
    <main className='home'>
      <Hero />
      <h2>Featured products</h2>
      <div className='featuredContainer'>
        {products.slice(2, 6).map(({ id, title, images, price }) => (
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
