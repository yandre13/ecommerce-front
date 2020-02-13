import React from 'react'

import {API} from '../../../../config'
import {useInputValue} from '../../../../hooks/useInputValue'
import { usePostData } from '../../../../hooks/usePostData'

import {useHistory} from 'react-router-dom'
import { useLocaleStorage } from '../../../../hooks/useLocalStorage'
import { useStateValue } from '../../../../state'


export const Signup = ()=>{
 const history = useHistory()
 const [state, dispatch] = useStateValue()
 const [storedValueToken, setLocalStorageToken] = useLocaleStorage('token', '')
 const [storedValueUser, setLocalStorageUser] = useLocaleStorage('user', '')
 const name = useInputValue(''),
  email = useInputValue(''),
  password = useInputValue(''),
  [sendPost, {loading, error, success}] = usePostData(`${API}/signup`),
  [sendPostSignin, infoSignin] = usePostData(`${API}/signin`),
  handleSubmit = async(e)=>{
   try {
    e.preventDefault()
   const user = {name: name.value, email: email.value, password: password.value}
   const data = await sendPost(user)
   
   if (!data.happy) {
    return null
   }else{
    setTimeout(async() => {
     const user = {email: email.value, password: password.value},
     dataSignin = await sendPostSignin(user)
     if (dataSignin.token) {
      dispatch({
       type: 'setToken',
       setNewToken:  dataSignin.token
      })
      dispatch({
       type: 'setUser',
       setNewUser:  dataSignin.user
      })
      setLocalStorageToken(dataSignin.token)
      setLocalStorageUser(dataSignin.user)
      return history.push('/')
     }
    }, 1500)
   }
   return console.log(`Error: ${error}`)
   } catch (error) {
    return console.log(error.message) 
   }
  }

 return (
  <>
   <form onSubmit={handleSubmit}>
    <div>
     <input name='name' placeholder='Name' {...name} />
    </div>

    <div>
     <input name='email' placeholder='Email' {...email} />
    </div>
  
    <div>
     <input name='password' placeholder='Password' type='password' {...password} />
    </div>

    <div>
     <input type='submit' value='Send' />
    </div>
   </form>
   {success && 'user created :)'}
   {loading && <div>loading</div>}
   {error && <div>Error :c {error}s</div>}
   {infoSignin.success && <div>logged</div>}
  </>
 )
}
