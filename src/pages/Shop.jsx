import '../styles/pages/Shop.css'
import products from '../assets/data.json'
import ProductCard from '../components/ProductCard.jsx'

export default function Shop() {
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
          />
        ))}
      </div>
    </main>
  )
}
