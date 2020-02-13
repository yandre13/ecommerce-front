import React from 'react'
import {useHistory} from 'react-router-dom'
import {API} from '../../../../config'

import {useInputValue} from '../../../../hooks/useInputValue'
import { useStateValue } from '../../../../state'
import { useLocaleStorage } from '../../../../hooks/useLocalStorage'
import { usePostData } from '../../../../hooks/usePostData'

export const Signin = ()=>{
 const history = useHistory()
 
 const [sendPost, {loading, error}] = usePostData(`${API}/signin`)

 const [state, dispatch] = useStateValue()
 const [storedValueToken, setLocalStorageToken] = useLocaleStorage('token', '')
 const [storedValueUser, setLocalStorageUser] = useLocaleStorage('user', '')
 const email = useInputValue(''),
  password = useInputValue(''),
  handleSubmit = async(e)=>{
   try {
    e.preventDefault()
    const user = {email: email.value, password: password.value}
    const data = await sendPost(user)
    if (!data.happy) {
     return null
    }else{
     dispatch({
      type: 'setToken',
      setNewToken:  data.token
     })
     dispatch({
      type: 'setUser',
      setNewUser:  data.user
     })
     setLocalStorageToken(data.token)
     setLocalStorageUser(data.user)
     return history.push(history.goBack())
    }
   } catch (error) {
    return console.log(error.message) 
   }
  }

 return (
  <>
   <form onSubmit={handleSubmit}>
    <div>
     <input name='email' placeholder='Email' {...email} />
    </div>
    <div>
     <input name='password' placeholder='Password' type='password' {...password} />
    </div>

    <div>
     <input type='submit' value='Send' />
    </div>

    {loading && <div>loading</div>}
    {error && <div>Error :c {error}s</div>}
   </form>
  </>
 )
}