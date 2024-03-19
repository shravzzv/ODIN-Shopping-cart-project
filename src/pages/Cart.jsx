import CartCard from '../components/CartCard'
import PropTypes from 'prop-types'
import '../styles/pages/Cart.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const cartItems = [
  {
    id: 1,
    title: 'Midnight Black Tuxedo',
    quantity: 2,
    image: '/products/suit1a.webp',
    price: 599,
  },
  {
    id: 2,
    title: 'Satin Blue Suit',
    quantity: 9,
    image: '/products/suit2a.webp',
    price: 499,
  },
  {
    id: 3,
    title: 'Navy Black Pinstripe Suit',
    quantity: 2,
    image: '/products/suit3a.webp',
    price: 549,
  },
  {
    id: 4,
    title: 'Burgundy Velvet Tuxedo',
    quantity: 1,
    image: '/products/suit4a.webp',
    price: 699,
  },
  {
    id: 5,
    title: 'Slate Gray Three-Piece Suit',
    quantity: 2,
    image: '/products/suit5a.webp',
    price: 649,
  },
  {
    id: 6,
    title: 'Black Velvet Dinner Suit',
    quantity: 1,
    image: '/products/suit6a.webp',
    price: 749,
  },
  {
    id: 7,
    title: 'Black Velvet Dinner Suit',
    quantity: 1,
    image: '/products/suit7a.webp',
    price: 599,
  },
]

// cartItems.length = 0

Cart.propTypes = {
  items: PropTypes.array,
}

export default function Cart({ items = cartItems }) {
  const [isNavbarFloating, setIsNavbarFloating] = useState(false)

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
      {items.length > 0 ? (
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
              {cartItems
                .reduce((acc, cv) => acc + cv.price * cv.quantity, 0)
                .toLocaleString()}
            </span>
          </h1>

          <div className='cartItemsContainer'>
            {items.map(({ id, title, quantity, image, price }) => (
              <CartCard
                key={id}
                id={id}
                title={title}
                quantity={quantity}
                image={image}
                price={price}
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
