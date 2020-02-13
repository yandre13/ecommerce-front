import React, { useEffect, useState, useRef } from 'react'
import { useStateValue } from '../../../state'
import { usePostData } from '../../../hooks/usePostData'
import { API } from '../../../config'
import { useInputValue } from '../../../hooks/useInputValue'
import { useGetData } from '../../../hooks/useGetData'
import {useHistory} from 'react-router-dom'

export const AddProduct = ()=>{
 const history = useHistory()
 const [categories, setCategories] = useState(null)
 const form = useRef(null)
 const [{user, token}] = useStateValue(),
  name = useInputValue(''),
  description = useInputValue(''),
  price = useInputValue(''),
  category = useInputValue(''),
  shipping = useInputValue(''),
  quantity = useInputValue(''),
  [image, setImage] = useState(null),
  [sendGet] = useGetData(`${API}/categories`, token),
  [sendPost, {loading, error, success}] = usePostData(`${API}/product/create/${user._id}`, token, true),
  handleSubmit = async(e)=>{
   try {
    e.preventDefault()
    const fd = new FormData()
    fd.append('image', image, image.name)
    fd.append('name', name.value)
    fd.append('description', description.value)
    fd.append('price', price.value)
    fd.append('category', category.value)
    fd.append('shipping', shipping.value)
    fd.append('quantity', quantity.value)
    const data = await sendPost(fd)
    if (!data.happy) {
     form.reset()
     return console.log(data)
    }else{
     return console.log(data)
    }
   } catch (error) {
    return console.log(error)
   }
  },
  handleFile = e => {
   const file = e.target.files[0]
   setImage(file)
  }

  useEffect(()=>{
   const getData = async()=>{
    const data = await sendGet()
    setCategories(data.categories)
   } 
   getData()
  }, [])

 return (
  <>
   {user.role !== 'ADMIN' && history.push('/')}
   <form ref={form} onSubmit={handleSubmit}>
    <div>
     <input placeholder='Name' {...name} />
    </div>
    
    <div>
     <input placeholder='Description' {...description} />
    </div>

    <div>
     <input placeholder='Price' {...price} />
    </div>

    <div>
    <select {...shipping}>
     <option>Please select</option>
     <option value={true}>Ya</option>
     <option value={false}>No</option>
    </select>
    </div>
   
    {
     categories && 
     <div>
     <select {...category}>
      <option>Select a category</option>
      {categories.map(el=>(
       <option key={el._id} value={el._id}>{el.name}</option>
      ))}
     </select>
    </div>
    }

    <div>
     <input placeholder='Quantity' {...quantity} />
    </div>

    <div>
     <input placeholder='Picture' type='file' onChange={handleFile} />
    </div>
     {console.log(image)}
    <div>
     <input type='submit' value='Send' />
    </div>
   </form>
   {success && 'product created :)'}
   {loading && <div>loading</div>}
   {error && <div>Error :c {error}s</div>}
  </>
 )
}