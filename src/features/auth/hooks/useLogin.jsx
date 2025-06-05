import React from 'react'
import { useForm } from 'react-hook-form'
import { login } from '../../../service/auth'
import { setAccessToken, setRefreshToken } from '../../../utils/tokenUtils';

const useLogin = () => {
    const {register, formState : {isSubmitting}, handleSubmit} = useForm();

    const handleLogin = async (data) => {
        try {
            const res = await login(data);
            console.log(res)
            setAccessToken(res.data.data.access_token)
            setRefreshToken(res.data.data.refresh_token)
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