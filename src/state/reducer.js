export const initialState = {
	token: JSON.parse(window.localStorage.getItem('token'))
		? JSON.parse(window.localStorage.getItem('token'))
		: {},
	user: JSON.parse(window.localStorage.getItem('user'))
		? JSON.parse(window.localStorage.getItem('user'))
		: {},
	found: [],
	noFound: null,
	searchBy: { category: null, name: null },
	cart: JSON.parse(window.localStorage.getItem('cart'))
		? JSON.parse(window.localStorage.getItem('cart'))
		: [],
}

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setToken':
			return {
				...state,
				token: action.setNewToken,
			}
		case 'setUser':
			return {
				...state,
				user: action.setNewUser,
			}
		case 'setFound':
			return {
				...state,
				found: action.setNewFound,
			}
		case 'setNoFound':
			return {
				...state,
				noFound: action.setNewNoFound,
			}
		case 'setCart':
			return {
				...state,
				cart: action.setNewCart,
			}
		default:
			return state
	}
}

//const nuChecked = [...checked]
/* 

import React, { useState } from 'react'
import { ItemCategory, CheckBoxCategory } from './styles'




export const CheckBoxC = ({categories, handleFilters})=>{

 const [checked, setChecked] = useState([])

 const handleToggle = c => ()=>{


  
  

  console.log('c', c)
  console.log('Ch', checked)
  const currentCId = checked.indexOf(c),
   newCheckedId = [...checked]
   console.log('curr', currentCId)
   console.log('newC', newCheckedId)
   if (currentCId === -1) {
    newCheckedId.push(c)
   }else{
    newCheckedId.splice(currentCId, 1)
   }
   console.log(newCheckedId)
   setChecked(newCheckedId)

   handleFilters(newCheckedId)
 }



 return categories.map((el, i)=>(
  <ItemCategory key={el._id}>
   {console.log(checked.indexOf(el._id === -1))}
   <CheckBoxCategory type='checkbox' value={checked.indexOf(el._id === -1)} onChange={handleToggle(el._id)} /> {el.name}
 </ItemCategory>
 ))
} 


























import React, { useState } from 'react'
import { ItemCategory, CheckBoxCategory } from './styles'




export const CheckBoxC = ({categories, handleFilters})=>{

 const [checked, setChecked] = useState([])

 const handleToggle = e=>{
  const value = e.target.value,
   newChecked = [...checked]
  
   if (value) {
   newChecked.push(value)
  }else{
   const copy = newChecked.map(el=> el !== value)
   newChecked = copy
  }
  setChecked(newChecked)
 console.log(newChecked)
 handleFilters(newChecked)

 }



 return categories.map((el, i)=>(
  <ItemCategory key={el._id}>
   <CheckBoxCategory type='checkbox' value={el._id} onChange={handleToggle} /> {el.name}
 </ItemCategory>
 ))
} 
*/

//Home

//V1
/* import React, { useState, useEffect, useRef } from 'react'
import {API} from '../../../config'
import { useGetData } from '../../../hooks/useGetData'
import { Card } from '../../UI/Card'
import { Container } from '../../UI/Container'
import { Row, Col } from '../../UI/Grid/styles'
import { useInputValue } from '../../../hooks/useInputValue'


export const Home = ()=>{

  const par = useRef(null)

  const [data, setData] = useState('Hola cómo estás, its me a paragraph :c')
 
  const getSelection = () =>{
    const selected = window.getSelection()
    let text = selected.toString()
    console.log(text)
    if (!text) {
      console.log('empty')
    }else{
      const nodeBold =toBold(text)
      let range = selected.getRangeAt(0)
      range.deleteContents()
      range.insertNode(nodeBold)
      const nuSpan = nodeBold
      const oldSpan = nuSpan.parentElement
      const oldDiv = oldSpan.parentElement
      const oldStyles =  range.commonAncestorContainer ? range.commonAncestorContainer : null
      for (const key of [...oldSpan.children]) {
        if (key.innerHTML) {
          console.log('key', key)
          if (oldStyles) {
            console.log('color: ',oldStyles.style.color)
          }
        }else{
          const parent = key.parentElement
          parent.removeChild(key)
        }
      }
      
      if(nodeBold.parentElement.nodeName === 'SPAN'){  
        nuSpan.style.color = oldStyles.style.color
        console.log('clean', oldSpan.innerHTML)
        console.log('no clean', nuSpan.innerHTML)
        if (oldSpan.innerHTML !== '') {
          range.insertNode(nuSpan)
          console.log(oldSpan)
        }else{
          oldDiv.replaceChild(nuSpan, oldSpan)
        }
        
      }
    }
  },

  toBold = (text)=>{
    const nod = document.createElement('span')
    nod.style = 'font-weight: bold'
    nod.append(text)
    
    return nod
  },

  toColor = (text, color)=>{
    console.log(color)
    const nod = document.createElement('span')
    nod.style = `color: ${color}`
    nod.append(text)
    return nod
  }

  const getSelectionColor = (color='red') =>{
    const selected = window.getSelection()
    let text = selected.toString()
    console.log(text)
    if (!text) {
      console.log('empty')
    }else{
      const nodeBold =toColor(text, color)
      let range = selected.getRangeAt(0)
      console.log(range)
      range.deleteContents()
      range.insertNode(nodeBold)
      const nuSpan = nodeBold
      const oldSpan = nuSpan.parentElement
      const oldDiv = oldSpan.parentElement
      const oldStyles =  range.commonAncestorContainer ? range.commonAncestorContainer : null

      for (const key of [...oldSpan.children]) {
        if (key.innerHTML) {
          console.log(key)
        }else{
          const parent = key.parentElement
          parent.removeChild(key)
        }
      }
      
      if(nodeBold.parentElement.nodeName === 'SPAN'){  
        nuSpan.style.fontWeight = oldStyles.style.fontWeight
        
        
        console.log('clean', oldSpan.innerHTML)
        console.log('no clean', nuSpan.innerHTML)
        if (oldSpan.innerHTML !== '') {
          range.insertNode(nuSpan)
        }else{
          oldDiv.replaceChild(nuSpan, oldSpan)
        }
      }
    }
  }



  return(
    <>
      <h2>Editor</h2>
      <div ref={par} contentEditable
        
      >
        {data}
      </div>
      <br/>
      <button
        onClick={getSelection}
      >
        To bold
      </button>
      <br/>
      <button
        onClick={()=>getSelectionColor('red')}
      >
        To Red
      </button>
    </>
  )
} */
