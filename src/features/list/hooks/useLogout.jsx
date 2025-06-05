import React from 'react'
import { logout } from '../../../service/auth'
import { useNavigate } from 'react-router-dom'
import { clearTokens } from '../../../utils/tokenUtils'

const useLogout = () => {
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {

        await logout();
        navigate("/");
        clearTokens()
        } catch (error) {
            console.log(error)
        }
    }
  return (
    {
        handleLogout
    }
  )
}

export default useLogout