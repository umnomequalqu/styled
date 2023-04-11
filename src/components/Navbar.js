import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav><ul><Link to='/pessoas'><h2>Ver as pessoas</h2></Link><Link to='/'><h2>Ver HOME</h2></Link></ul></nav></>
  )
}

export default Navbar