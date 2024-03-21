import '../styles/pages/Product.css'
import products from '../assets/data.json'
import { useParams } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider'
import ImageGallery from '../components/ImageGallery'
import { useEffect, useState } from 'react'

export default function Product() {
  const [quantity, setQuantity] = useState(1)
  const [isOnMobile, setIsOnMobile] = useState(null)
  const { id } = useParams()
  const { title, description, price, images } = products.find(
    (product) => product.id == id
  )

  const handleAddToCart = () => {
    console.log({ id, quantity })
  }

  useEffect(() => {
    setIsOnMobile(window.matchMedia('(max-width: 767px)').matches)

    const handleResize = () => {
      setIsOnMobile(window.matchMedia('(max-width: 767px)').matches)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <main className='product'>
      {isOnMobile ? (
        <ImageSlider images={images} alt={title} />
      ) : (
        <ImageGallery images={images} alt={title} />
      )}

      <div className='texts'>
        <h1 className='title'>{title}</h1>
        <p className='desc'>{description}</p>
        <p className='price'>$ {price}</p>

        <div className='quantitySelector'>
          <button
            className='icon'
            title='decrease quantity'
            onClick={() => setQuantity((prev) => prev - 1)}
            disabled={quantity == 1}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 -960 960 960'
              width='24'
            >
              <path d='M200-440v-80h560v80H200Z' />
            </svg>
          </button>
          <input
            type='number'
            name='quantity'
            min='1'
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <button
            className='icon'
            title='increase quantity'
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 -960 960 960'
              width='24'
            >
              <path d='M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z' />
            </svg>
          </button>
        </div>

        <button className='filled' onClick={handleAddToCart}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24'
            viewBox='0 -960 960 960'
            width='24'
          >
            <path d='M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z' />
          </svg>
          Add to Cart
        </button>
      </div>
    </main>
  )
}
