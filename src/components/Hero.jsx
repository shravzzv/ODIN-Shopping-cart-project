import { Link } from 'react-router-dom'
import '../styles/components/Hero.css'

export default function Hero() {
  return (
    <div className='hero'>
      <div className='text'>
        <h1>Shop the biggest sale of the year.</h1>
        <p>
          <strong>
            Experience the luxury of designer brands without breaking the bank.
          </strong>
          Shop our sale and indulge in premium quality suits, tuxedos and
          designer wear at unbelievable prices. Treat yourself to something
          special you deserve.
        </p>
        <Link to='/shop'>
          <button className='filled'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 -960 960 960'
              width='24'
            >
              <path d='m260-260 300-140 140-300-300 140-140 300Zm220-180q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
            </svg>
            Explore products
          </button>
        </Link>
      </div>
      <div className='imageContainer'>
        <img src='/heroImage.webp' alt='a man in a suit' />
      </div>
    </div>
  )
}
