import { Link, useRouteError } from 'react-router-dom'
import '../styles/pages/Exceptions.css'

export default function Exceptions() {
  const error = useRouteError()

  return (
    <main className='exceptions'>
      <h1>An exception has occured 🙃!</h1>

      {error.status && <p>Status code: {error.status}</p>}
      {error.stack && <pre>{error.stack}</pre>}

      <div className='links'>
        <Link
          to='https://github.com/shravzzv/ODIN-Shopping-cart-project/issues/new'
          target='_blank'
        >
          <button className='filled'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 -960 960 960'
              width='24'
            >
              <path d='M480-200q66 0 113-47t47-113v-160q0-66-47-113t-113-47q-66 0-113 47t-47 113v160q0 66 47 113t113 47Zm-80-120h160v-80H400v80Zm0-160h160v-80H400v80Zm80 40Zm0 320q-65 0-120.5-32T272-240H160v-80h84q-3-20-3.5-40t-.5-40h-80v-80h80q0-20 .5-40t3.5-40h-84v-80h112q14-23 31.5-43t40.5-35l-64-66 56-56 86 86q28-9 57-9t57 9l88-86 56 56-66 66q23 15 41.5 34.5T688-640h112v80h-84q3 20 3.5 40t.5 40h80v80h-80q0 20-.5 40t-3.5 40h84v80H688q-32 56-87.5 88T480-120Z' />
            </svg>
            Report this on Github
          </button>
        </Link>
        <Link to='/' reloadDocument>
          <button className='outlined'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 -960 960 960'
              width='24'
            >
              <path d='M180-120q-25 0-42.5-17.5T120-180v-76l160-142v278H180Zm140 0v-160h320v160H320Zm360 0v-328L509-600l121-107 190 169q10 9 15 20.5t5 24.5v313q0 25-17.5 42.5T780-120H680ZM120-310v-183q0-13 5-25t15-20l300-266q8-8 18.5-11.5T480-819q11 0 21.5 3.5T520-804l80 71-480 423Z' />
            </svg>
            Go to Home
          </button>
        </Link>
      </div>
    </main>
  )
}
