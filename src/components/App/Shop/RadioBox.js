import React, { useState } from 'react'
import { ItemCategory, CheckBoxCategory } from './styles'




export const RadioBoxC = ({prices, handleFilters})=>{

 

 const handleChange= (e)=>{
  console.log([e.target.value])
   handleFilters([e.target.value])
 
 }



 return (
   <>
    {
      prices && 
      prices.map((el, i)=>(
        <ItemCategory key={el._id}>
         
         <CheckBoxCategory type='radio' name='price' value={el.array} onChange={handleChange} /> {el.name}
       </ItemCategory>
       ))
    }
   </>
 )
} 