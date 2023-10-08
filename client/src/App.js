import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Product from './pages/Product'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
    const defaultRouter = createBrowserRouter([
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/home",
            element: <Home />
        },
        {
            path: "/product",
            element: <Product />
        }
    ])
    return (
        <div className='App'>
            <RouterProvider router={defaultRouter} />
        </div>
    )
}

export default App