import React from 'react'
import './public.css';
import Navbar from './components/Navbar';
import { router } from './router'
import { RouterProvider } from 'react-router-dom';
function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App