import React, { useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import axios from "axios";

export default function Auth() {
  const {username,setUsername,secret,setSecret} =useContext(Context)
  // c897b0dc-981f-40a7-af61-010babaf38b5
  const router =useRouter()
  const  onSubmit = (e) =>{
   e.preventDefault()
   if (username.length === 0 || secret.length === 0) return
   axios.put('https://api.chatengine.io/users/',{username,secret},
   {headers:{"Private-Key":'c897b0dc-981f-40a7-af61-010babaf38b5'}}
   )
   .then(r => router.push('/chats'))
  }
  return (
  <div className="background-login">
    <div className='auth-container'>
      <form className='auth-form' onSubmit={e => onSubmit(e)}>
          <div className="auth-title">Benja chats</div>
          <div className='input-container'>
            <input 
            placeholder="Email"
            className="text-input"
            onChange={e =>setUsername(e.target.value)}/>
            </div>
            <div className='input-container'>
            <input 
            type='Password'
            placeholder="Password"
            className="text-input"
            onChange={e =>setSecret(e.target.value)}/>
            </div>
          <button type="submit" className="submit-button">
            Login / sign up
          </button>
      </form>
    </div>
  </div>
  )
}
