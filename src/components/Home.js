import React from 'react'
import { AuthContext, useAuth } from '../contexts/AuthController'

export const Home = () => {
    const authContext = useAuth();
    console.log(authContext);
  return (
    <div>Home</div>
  )
}
