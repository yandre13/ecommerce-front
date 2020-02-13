import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useGetData } from '../../../hooks/useGetData'
import { API } from '../../../config'
import { Card } from '../../UI/Card'
import { Text } from '../../UI/Text'
import moment from 'moment'
import { CustomRow, CustomCol } from '../../UI/Grid/styles'


export const Product = ()=>{
 const {id} = useParams(),
  [product, setProduct] = useState(null),
  [relatedProducts, setRelatedProducts] = useState([]),
  [sendGetData, {loading, error}] = useGetData(`${API}/product/${id}`),
  [sendGetDataRelated, infoRelated] = useGetData(`${API}/products/related/${id}/`),
  getProduct = async()=>{
   try {
    const data = await sendGetData()
    if (data.happy) {
     setProduct(data.product)
     const dataRelatedProducts = await sendGetDataRelated()
     
     setRelatedProducts(dataRelatedProducts.relatedProducts)
    }
   } catch (error) {
    return console.log(error)
   }
  }

  useEffect(()=>{
   getProduct()
  }, [id])

 return(
  <>
   {product && 
    <CustomRow tracks='3' gutter='25px'>
     <CustomCol nspan='2'>
      <Card border={true} {...product} >
      <Text type={{tag:'p'}} align={'left'}>Category: {product.category.name}</Text>
      <Text type={{tag:'p'}} align={'left'}>Added on: {moment(product.createdAt).fromNow()}</Text>
      {
       product.quantity > 0 ?
       <Text type={{tag:'p'}} align={'left'}>Quantity: {product.quantity} In stock</Text> :
       <Text type={{tag:'p'}} align={'left'}>Quantity: {product.quantity} Out of stock</Text>
      }
     </Card>
     </CustomCol>
     <CustomCol nspan='1'>
      {
       relatedProducts.length > 0 &&
       <Text type={{tag:'h3'}} weight={'bold'} align={'left'}>Related products</Text>
      }
      {
       relatedProducts.length > 0 &&
       relatedProducts.map(el=>(
        <Card key={el._id} border={true} buttonView={true} {...el}></Card>
        ))
      }
     </CustomCol>
    </CustomRow>
   }
   {console.log(product)}
  </>
 )
}