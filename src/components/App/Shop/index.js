import React, { useState, useEffect } from 'react'
import { useGetData } from '../../../hooks/useGetData'
import { API } from '../../../config'
import { Container } from '../../UI/Container'
import { CustomRow, CustomCol, Row, Col } from '../../UI/Grid/styles'
import { ListCategories, ItemCategory, CheckBoxCategory } from './styles'
import { prices } from '../../../helpers/prices'
import { usePostData } from '../../../hooks/usePostData'
import { useStateValue } from '../../../state'
import { Card } from '../../UI/Card'
import { CheckBoxC } from './CheckBox'
import { RadioBoxC } from './RadioBox'

export const Shop = () => {
	const [categories, setCategories] = useState([]),
		[myFilters, setMyFilters] = useState({
			filters: {
				category: [],
				price: [],
			},
		}),
		[limit, setLimit] = useState(6),
		[products, setProducts] = useState([]),
		[{ token }] = useStateValue(),
		[sendPost] = usePostData(`${API}/products/by/filters`, token),
		[count, setCount] = useState(null)

	const [sendGet] = useGetData(`${API}/categories`),
		getData = async () => {
			try {
				const data = await sendGet()
				if (!data.happy) {
					return console.log('something went wrong')
				}
				setCategories(data.categories)
				return console.log(data)
			} catch (error) {
				return console.log(error)
			}
		},
		handleFilters = async (filters, type) => {
			console.log(filters, type)

			const newFilters = { ...myFilters, limit }
			newFilters.filters[type] = filters
			if (type === 'price') {
				const toNumbers = filters.toString().split(','),
					price = [parseInt(toNumbers[0]), parseInt(toNumbers[1])]
				console.log('cc', price)
				newFilters.filters[type] = price
			}
			const data = await sendPost(newFilters)
			if (!data.happy) {
				return console.log(data)
			} else {
				setProducts(data.products)
				setCount(data.count)
			}
			setMyFilters(newFilters)
		},
		loadMoreProducts = async () => {
			const newLimit = limit + 6
			const data = await sendPost({ ...myFilters, limit: newLimit })
			if (!data.happy) {
				return console.log(data)
			} else {
				console.log(data)
				setProducts(data.products)
			}
		}

	useEffect(() => {
		getData()
		handleFilters()
	}, [])

	return (
		<>
			<Container>
				<CustomRow gutter={'30px'}>
					<CustomCol nspan={1}>
						<div>
							<h2>filter by categories</h2>
							<ListCategories>
								<CheckBoxC
									categories={categories}
									handleFilters={filters => handleFilters(filters, 'category')}
								></CheckBoxC>
							</ListCategories>
						</div>
						<br />
						<div>
							<h2>filter by price</h2>
							<ListCategories>
								<RadioBoxC
									prices={prices}
									handleFilters={filters => handleFilters(filters, 'price')}
								></RadioBoxC>
							</ListCategories>
						</div>
					</CustomCol>
					<CustomCol nspan={2}>
						{JSON.stringify(myFilters)}
						<Row tracks={12}>
							{products.length > 0 &&
								products.map((el, i) => (
									<Col nspan="4" key={i}>
										<Card border={true} button={true} {...el} />
									</Col>
								))}
						</Row>
					</CustomCol>
					<br />
					{count - products.length === 0 && (
						<button onClick={loadMoreProducts}>Load more</button>
					)}
				</CustomRow>
			</Container>
		</>
	)
}
