import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Appointment from './components/Appointment'
import { createBrowserRouter, RouterProvider, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/appointment",
      element: <><Navbar /><Appointment /></>
    },
  ])

  return (

    <>
    <RouterProvider router={router} />
    </>

  )
}

export default App
