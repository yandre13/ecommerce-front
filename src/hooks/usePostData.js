import { useState } from 'react'

export const usePostData = (url, token, mfd = null)=>{

 const [info, setInfo] = useState({
   loading: false,
   error: false,
   success: false
 }),
  sendPost = async(dataForm)=>{
   try {
    setInfo({...info, loading: true})

    const myHeaders = new Headers()

    !mfd && myHeaders.append('Content-Type', 'application/json')
    token && myHeaders.append('token', token)
    const response = await fetch(url, {
     method: 'POST',
     headers: myHeaders,
     body: mfd ? dataForm : JSON.stringify(dataForm)
    }),
     json = await response.json()
    if (!json.happy) {
     setInfo({...info, loading: false, error: json.error})
    }else{
     setInfo({...info, error: false, success: true})
    }
    return json
   } catch (error) {
    return console.log(error.message)
   }
  }
 return [sendPost, info]
}