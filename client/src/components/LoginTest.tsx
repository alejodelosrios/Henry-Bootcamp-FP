import React from 'react'
import { Login } from './Login'
import { Logout } from './Logout'
import { Profile } from './Profile'

export const LoginTest = () => {
    return (
        <div>
            <Login />
            <Logout />
            
            <Profile/>
        </div>
    )
}
