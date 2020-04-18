/**
 * @brief Signup Page
 * @author Andrécio Costa
 * @date 17/04/2020
*/

import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { handleSignup } from '../../lib/handleFunctions'
import './signup.css'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const toSubmit = async (e) => {
    e.preventDefault()
    try {
      await handleSignup({ username, email, password })
    } catch (err) {
      setError(true)
    }
  }

  return (
    <section className='signup-page'>
      <div>
        <h1 className='titles'>Sign Up!</h1>
      </div>
      <div className='signup'>
        <img src="./images/poke-logo.gif" alt="logo" />
        <form onSubmit={toSubmit} className='signup-from'>
          {error && <h2 className='error-msg'> Ops! Something is wrong!</h2>}
          <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} required />
          <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
          <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} minLength={8} required />
          <Button type='submit' variant='contained' color='primary' title='next page'>Sign Up!</Button>
        </form>
      </div>
    </section>
  )
}

export default Signup