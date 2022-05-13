import React from 'react'
import { useDispatch } from 'react-redux'
import userSlice from '../store/user'
import { Navigate } from 'react-router-dom'

const Logout = () => {

    const dispatch = useDispatch()

    // Menghapus token dari localStorage
    localStorage.removeItem('bcrUserAccessToken')
    // Update user store menjadi null
    dispatch( userSlice.actions.removeUser() )

  return (
    <Navigate to="/" />
  )
}

export default Logout