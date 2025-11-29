import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to={'/'}>
    <img src='/logo.png' className='w-20 aspect-6/3' />
    </Link>
  )
}

export default Logo