import { useState } from 'react'

export const useGetData = (url, token)=>{

 const [info, setInfo] = useState({
  loading: false,
  error: false,
  success: false
 }),
  sendGet = async()=>{
   try {
    setInfo({
     ...info, loading: true
    })
    const response = await fetch(url, {
     method: 'GET',
     headers: {
      'Content-Type': 'application/json',
      token: token ? token : null
     }
    }),
     json = await response.json()
   
    if (!json.happy) {
     setInfo({
      ...info, loading: false, error: json.error
     })
     return console.log(json)
    }else{
     setInfo({
      ...info, loading: false, success: true
     })
     console.log(json)
     return json
    }

   } catch (error) {
    return console.log(error)
   } 
  }

 return [sendGet, info]
}