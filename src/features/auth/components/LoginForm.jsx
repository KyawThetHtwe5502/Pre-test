import React from 'react'
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react'
import useLogin from '../hooks/useLogin'

const LoginForm = () => {
    const {register, handleSubmit , isSubmitting, handleLogin} = useLogin();
    console.log(isSubmitting)
  return (
    <Card>
                <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit(handleLogin)} >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username">Your email</Label>
        </div>
        <TextInput id="username" type="text" placeholder="username" {...register("username")} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Your password</Label>
        </div>
        <TextInput id="password1" type="password" {...register("password")} required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember"  />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit" >Submit</Button>
    </form>

        </Card>
  )
}

export default LoginForm