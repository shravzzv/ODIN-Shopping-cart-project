import CartCard from '../components/CartCard'
import PropTypes from 'prop-types'
import '../styles/pages/Cart.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import products from '../assets/data.json'

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
}

export default function Cart({ cartItems, removeFromCart }) {
  const [isNavbarFloating, setIsNavbarFloating] = useState(false)

  const currentItems = cartItems.map((item) => ({
    ...item,
    ...products.find((product) => product.id === item.id),
  }))

  const handleCheckout = () => {}

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY == 0
        ? setIsNavbarFloating(false)
        : setIsNavbarFloating(true)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className='cart'>
      {currentItems.length > 0 ? (
        <>
          <button
            className={`fab ${isNavbarFloating ? 'floating' : ''}`}
            onClick={handleCheckout}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 -960 960 960'
              width='24'
            >
              <path d='m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z' />
            </svg>
            Checkout
          </button>

          <h1 className='amount'>
            Amount:{' '}
            <span>
              $
              {currentItems
                .reduce((acc, cv) => acc + cv.price * cv.quantity, 0)
                .toLocaleString()}
            </span>
          </h1>

          <div className='cartItemsContainer'>
            {currentItems.map(({ id, title, quantity, images, price }) => (
              <CartCard
                key={id}
                id={id}
                title={title}
                quantity={quantity}
                image={images[0]}
                price={price}
                remove={removeFromCart}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <p>There is nothing in the cart yet!</p>
          <Link to='/shop'>Go to shop</Link>
        </>
      )}
    </main>
  )
}
