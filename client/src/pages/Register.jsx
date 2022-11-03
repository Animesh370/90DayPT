import React from 'react'
import { Header } from '../components/styles/auth.styled'

const Register = () => {
  return (
    <div>
      <Header>Create a Free account</Header>
      <label>FirstName:</label><input type="text" /><br />
      <label>LastName :</label><input type="text" /><br />
      <label>Email    :</label><input type="email" /><br />
      <label>Age      :</label><input type="number" /><br />
      <label>Password :</label><input type="password" /><br />
    </div>
  )
}

export default Register
