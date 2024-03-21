import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Error from './pages/Error'
import Exceptions from './pages/Exceptions.jsx'

export default function Router() {
  const [cartItems, setCartItems] = useState([])

  const cartItemsCount = cartItems.reduce((acc, cv) => acc + cv.quantity, 0)

  const addToCart = (id, quantity) =>
    cartItems.every((item) => item.id !== id) &&
    setCartItems((prev) => [...prev, { id, quantity }])

  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id))

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout cartItemsCount={cartItemsCount} />,
      errorElement: <Exceptions />,
      children: [
        {
          path: '/',
          element: <Home cartItems={cartItems} addToCart={addToCart} />,
        },
        {
          path: '/shop',
          element: <Shop cartItems={cartItems} addToCart={addToCart} />,
        },
        {
          path: '/product/:id',
          element: <Product cartItems={cartItems} addToCart={addToCart} />,
        },
        {
          path: '/cart',
          element: (
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          ),
        },
        {
          path: '*',
          element: <Error />,
        },
      ],
    },
    {
      path: '*',
      element: <Error />,
    },
  ])

  return <RouterProvider router={router} />
}
