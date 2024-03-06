import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import '../styles/pages/Home.css'
import products from '../assets/data.json'

export default function Home() {
  return (
    <main className='home'>
      <Hero />
      <h2>Featured products</h2>
      <div className='featuredContainer'>
        {products.slice(2, 6).map(({ id, title, images }) => (
          <ProductCard key={id} imgSrc={images[0]} title={title} id={id} />
        ))}
      </div>
    </main>
  )
}
