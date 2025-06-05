import React from 'react'
import { useForm } from 'react-hook-form'
import { login } from '../../../service/auth'
import { setAccessToken, setRefreshToken } from '../../../utils/tokenUtils';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const {register, formState : {isSubmitting}, handleSubmit} = useForm();
    const navigate = useNavigate()
    const handleLogin = async (data) => {
      try {
          console.log(data)
            const res = await login(data);
            console.log(res)
            setAccessToken(res.data.data.access_token)
            setRefreshToken(res.data.data.refresh_token)
            navigate("/list")
        } catch(err) {
            console.log(err.message)
        }
    }
  return {
    handleLogin,
    register,
    isSubmitting,
    handleSubmit
  }
}

export default useLogin