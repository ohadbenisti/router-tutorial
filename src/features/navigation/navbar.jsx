import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <Link className='nav-link' to={'/'}>HOME PAGE</Link>
    <Link className='nav-link' to={'shop'}>Shop</Link>
    <Link className='nav-link' to={'/contacts'}>Contacts</Link>
    <Link className='nav-link' to={'/register'}>Register</Link>
  </nav>
  )
}

export default Navbar