import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Protfolio from './Component/Protfolio/protfolio.jsx'
import Contact from './Component/Contact/contact.jsx'
import Layout from './Component/Layout/layout.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './Component/About/about.jsx'
import Home  from './Component/Home/home.jsx'




 let x = createBrowserRouter([

  {
    path: '' , element: <Layout/> , children: [
      {index: true , element: <Home/>},
      {path: 'about' , element: <About/>},
      {path: 'protfolio' , element: <Protfolio/>},
      {path: 'contact' , element: <Contact/>},
      
    ]
  }
 ])

 
function App() {
  

  return (<RouterProvider router={x}></RouterProvider>
    
  )
}

export default App
