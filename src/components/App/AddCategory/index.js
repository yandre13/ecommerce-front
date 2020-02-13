import React from 'react'
import { useStateValue } from '../../../state'
import { usePostData } from '../../../hooks/usePostData'
import { useHistory } from 'react-router-dom'
import { useInputValue } from '../../../hooks/useInputValue'
import { API } from '../../../config'


export const AddCategory = ()=>{

 const history = useHistory()
 const [{user, token}] = useStateValue(),
  [sendPost, {loading, error, success}] = usePostData(`${API}/category/create/${user._id}`, token)
 const name = useInputValue(''),
  

  handleSubmit = async(e)=>{
   try {
    e.preventDefault()

    const category = {name: name.value}
    
    const data = await sendPost(category)
     
     console.log(data)
    if (!data.happy) {
     return console.log(data)
    }else{
     return console.log(data)
     
    }
   } catch (error) {
    return console.log(error) 
   }
  }

  
 return (
  <>
  {user.role !== 'ADMIN' && history.push('/')}
   <div>
   <h2>{user.name}</h2>
   <h2>{user._id}</h2>
   </div>
   <form onSubmit={handleSubmit}>
    <div>
     <input name='name' placeholder='Name' {...name} />
    </div>


    <div>
     <input type='submit' value='Send' />
    </div>
   </form>
   {success && 'category created :)'}
   {loading && <div>loading</div>}
   {error && <div>Error :c {error}s</div>}
  </>
 )
}