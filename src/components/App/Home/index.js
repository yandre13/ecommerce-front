import React, { useState, useEffect } from 'react'
import { API } from '../../../config'
import { useGetData } from '../../../hooks/useGetData'
import { Card } from '../../UI/Card'
import { Container } from '../../UI/Container'
import { Row, Col } from '../../UI/Grid/styles'
import { useInputValue } from '../../../hooks/useInputValue'
import { Search } from '../Search'
import { useStateValue } from '../../../state'

export const Home = () => {
	const qA = {
			sortBy: 'createdAt',
			order: 'desc',
			limit: 10,
		},
		qS = {
			sortBy: 'sold',
			order: 'desc',
			limit: 10,
		}

	const [{ found, noFound, searchBy, cart }] = useStateValue()

	const [dataByArrival, setDataByArrival] = useState([]),
		[dataBySell, setDataBySell] = useState([]),
		[sendGetByArrival, infoByArrival] = useGetData(
			`${API}/products?sortBy=${qA.sortBy}&order=${qA.order}&limit=${qA.limit}`
		),
		[sendGetBySell, infoBySell] = useGetData(
			`${API}/products?sortBy=${qS.sortBy}&order=${qS.order}&limit=${qS.limit}`
		),
		getDataByArrival = async () => {
			try {
				const data = await sendGetByArrival()
				console.log(data)
				if (data.happy) {
					setDataByArrival(data.products)
					return console.log('ok')
				}
				return console.log(dataByArrival)
			} catch (error) {
				return console.log(error)
			}
		},
		getDataBySell = async () => {
			try {
				const data = await sendGetBySell()
				console.log(data)
				if (data.happy) {
					setDataBySell(data.products)
					return console.log('ok')
				}
				return console.log(dataBySell)
			} catch (error) {
				return console.log(error)
			}
		}

	useEffect(() => {
		getDataByArrival()
		getDataBySell()
	}, [])

	return (
		<>
			<div>
				<Container>
					<Search></Search>
					<br />
					{JSON.stringify(cart)}
					<br />
					{JSON.stringify(searchBy)}
					{found.length > 0 ? (
						<Row tracks={12} gutter={'30px'}>
							{found.map(el => (
								<Col key={el._id} nspan={3}>
									<Card border={true} {...el} />
								</Col>
							))}
						</Row>
					) : (
						<>
							<h2>Products by Arrival</h2>
							{infoByArrival.loading && <div>Loading...</div>}
							{dataByArrival && (
								<Row tracks={12} gutter={'30px'}>
									{dataByArrival.map(el => (
										<Col key={el._id} nspan={3}>
											<Card border={true} buttonView={true} {...el} />
										</Col>
									))}
								</Row>
							)}
							<hr />
							<h2>Products by Sell</h2>
							{infoBySell.loading && <div>Loading...</div>}
							{dataBySell && (
								<Row tracks={15} gutter={'30px'}>
									{dataBySell.map(el => (
										<Col key={el._id} nspan={3}>
											<Card border={true} buttonView={true} {...el} />
										</Col>
									))}
								</Row>
							)}
							{infoByArrival.error && <div>error{infoByArrival.error}</div>}
						</>
					)}
				</Container>
			</div>
		</>
	)
}
