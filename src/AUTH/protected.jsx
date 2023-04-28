import React from 'react'
import { useAuth } from "./index"
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom'

const Protected = () => {
      const auth = useAuth();

   /*   if (!auth.user) {
            return <Navigate to='/login' />
      } */

      return <Outlet />
}

export default Protected
