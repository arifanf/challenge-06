import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import userSlice from './store/user'
import axios from "axios"
import Async from 'react-async'
import jwtDecode from 'jwt-decode'

import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Logout from './Pages/Logout'
import UnprotectedRoute from './Components/HOC/UnprotectedRoute'
import ProtectedRoute from './Components/HOC/ProtectedRoute'

const getUser = async () => {
  try {
    const token = localStorage.getItem('minishopAccessToken')
    const userData = jwtDecode(token)
    const res = await axios.get(`http://localhost:4000/users/${userData.sub}`)
    return {
      user: res.data
    }
  } catch {
    return {
      user: null
    }
  }
}

function App() {

  const dispatch = useDispatch()

  return (
    <Async promiseFn={getUser}>
      {({ data, error, isPending }) => {
        if (isPending) {
          return <h2>Loading...</h2>
        }
        if (error) {
          return <h2>Error</h2>
        }
        if (data) {
          if ( data.user !== null ) {
            dispatch( userSlice.actions.addUser({userData: data.user}) )
          }
          return (
            <BrowserRouter>
              <div className="App">
                <Routes>
                  <Route path="/" element={<Layout/>}>
                    {/* ALL */}
                    <Route index element={<Home/>}/>
                    <Route path="Logout" element={<Logout/>}/>

                    {/* PUBLIC ONLY */}
                    <Route path="/" element={<UnprotectedRoute />}>
                      <Route path="Login" element={<Login/>}/>
                      <Route path="Register" element={<Register/>}/>
                    </Route>

                    {/* PROTECTED */}
                    <Route path="/" element={<ProtectedRoute />}>
                      <Route path="Dashboard" element={<Dashboard/>}/>
                    </Route>
                  </Route>
                </Routes>
              </div>
            </BrowserRouter>
          )
        }
      }}
    </Async>
  )
}

  

export default App
