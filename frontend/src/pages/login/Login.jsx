/**
 * @brief Login Page
 * @author Andrécio Costa
 * @date 17/04/2020
*/

import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { handleLogin } from '../../lib/handleFunctions'
import './login.css'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const toSubmit = async (e) => {
    e.preventDefault()
    try {
      await handleLogin({ email, password })
    } catch (err) {
      setError(true)
    }
  }

  return (
    <section className='login-page'>
      <div>
        <h1 className='titles'>Login !</h1>
      </div>
      <div className='login'>
        <img src="./images/poke-logo.gif" alt="logo" />
        <form onSubmit={toSubmit} className='login-from'>
          {error && <h2 className='error-msg'> Ops! Something is wrong!</h2>}
          <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
          <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} minLength={8} required />
          <Button type='submit' variant='contained' color='primary' title='next page'>Login</Button>
        </form>

      </div>
    </section>
  )
}

export default Login