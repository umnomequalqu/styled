import React from 'react'
import '../public.css'
import Navbar from '../components/Navbar'
import { Fundo } from '../Styled/Layout'

function HomePage() {
  return (
    <Fundo><Navbar/><h1>bem vindo ao site</h1></Fundo>)
}

export default HomePage