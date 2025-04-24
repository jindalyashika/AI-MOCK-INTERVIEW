import { Link } from 'react-router'

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
        <img src="/svg/logo.svg" alt="" className='min-w-30 min-h-30 object-contain' />
    </Link>

  )
}


