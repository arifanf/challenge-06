import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = () => {

    const user = useSelector( store => store.user.data )

    if ( user.isAdmin === true  ) {
        return (
            <Navigate to="/dashboard" />
        )
    } else {
        return (
            <Outlet />
        )
    }
  
}

export default ProtectedRoute