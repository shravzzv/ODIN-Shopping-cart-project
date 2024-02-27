import { Link } from 'react-router-dom'
import '../styles/components/Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/cart'>Cart</Link>
    </nav>
  )
}
