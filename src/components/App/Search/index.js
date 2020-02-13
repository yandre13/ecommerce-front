import React, { useState, useEffect } from 'react'
import { useGetData } from '../../../hooks/useGetData'
import { API } from '../../../config'
import { Container } from '../../UI/Container'
import { CustomRow, CustomCol, Row, Col } from '../../UI/Grid/styles'
import { usePostData } from '../../../hooks/usePostData'
import { useStateValue } from '../../../state'

export const Search = () => {
	const [dataForm, setDataForm] = useState({ name: '', category: null })

	const [categories, setCategories] = useState([]),
		[{ noFound }, dispatch] = useStateValue(),
		[sendPostProducts] = usePostData(`${API}/products/by/search`)

	const [sendGetCategories] = useGetData(`${API}/categories`),
		getCategories = async () => {
			try {
				const data = await sendGetCategories()
				if (!data.happy) {
					return console.log('something went wrong')
				}
				setCategories(data.categories)
				return console.log(data)
			} catch (error) {
				return console.log(error)
			}
		},
		handleGetProductsBy = async e => {
			try {
				const dataCopy = { ...dataForm },
					name = e.target.name,
					val = e.target.value
				setDataForm({ ...dataForm, [name]: val })
				name === 'name'
					? (dataCopy.name = e.target.value)
					: (dataCopy.category = e.target.value)

				if (dataCopy.name.length > 2 || dataCopy.category) {
					console.log(dataCopy)
					const data = await sendPostProducts(dataCopy)
					if (!data.happy) {
						return console.log(`err: ${data.error}`)
					} else {
						dispatch({
							type: 'setFound',
							setNewFound: data.products,
						})
						if (data.products.length === 0) {
							dispatch({ type: 'setNoFound', setNewNoFound: true })
						}
						if (data.products.length > 0) {
							dispatch({ type: 'setNoFound', setNewNoFound: false })
						}
					}
					console.log(data.products)
				} else {
					dispatch({
						type: 'setFound',
						setNewFound: [],
					})
					dispatch({ type: 'setNoFound', setNewNoFound: false })
				}
			} catch (e) {
				return console.log(e)
			}
		}

	useEffect(() => {
		getCategories()
	}, [])

	return (
		<>
			<Container>
				<CustomRow gutter="30px">
					<CustomCol nspan={1}>
						<select name="category" onChange={handleGetProductsBy}>
							<option value="">Any</option>
							{categories &&
								categories.map(el => (
									<option key={el._id} value={el._id}>
										{el.name}
									</option>
								))}
						</select>
					</CustomCol>
					<CustomCol nspan={2}>
						<input
							name="name"
							placeholder="search a book"
							value={dataForm.name}
							onChange={handleGetProductsBy}
						></input>
					</CustomCol>
				</CustomRow>
			</Container>
			{noFound && (
				<h3>
					Sorry we haven't found anything with {dataForm.name || 'that category'}
				</h3>
			)}
		</>
	)
}
