import { Link } from 'react-router-dom'
import '../styles/pages/Error.css'

export default function Error() {
  return (
    <main>
      <h1>Error page</h1>
      <Link to='/'>Go back to home</Link>
    </main>
  )
}
