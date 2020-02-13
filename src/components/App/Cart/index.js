import React, { useState, useEffect } from 'react'
import { useStateValue } from '../../../state'
import { useLocaleStorage } from '../../../hooks/useLocalStorage'
import { CustomRow, CustomCol } from '../../UI/Grid/styles'
import { Checkout } from '../Checkout'

export const Cart = () => {
	const [total, setTotal] = useState(0)
	const [storedValue, setStoredValue] = useLocaleStorage('cart')

	const calculateTotal = cart => {
		const newTotal = cart.reduce((acc, el) => {
			const price = el.quantity * el.price
			return acc + price
		}, 0)
		setTotal(newTotal)
	}

	const [{ cart }, dispatch] = useStateValue(),
		deleteProduct = id => {
			const newCart = cart.filter(el => el._id !== id)
			dispatch({
				type: 'setCart',
				setNewCart: [...newCart],
			})
			setStoredValue([...newCart])
			calculateTotal(newCart)
		},
		handleQuantity = (e, id) => {
			const val = e.target.value

			cart.map(el => {
				console.log(el)
				if (el._id === id) {
					el.quantity = Number(val)
					dispatch({
						type: 'setCart',
						setNewCart: [...cart],
					})
					setStoredValue([...cart])
				}
			})
			calculateTotal(cart)
		},
		clearCart = () => {
			dispatch({
				type: 'setCart',
				setNewCart: [],
			})
		}

	useEffect(() => {
		calculateTotal(cart)
	}, [total])

	return (
		<>
			{cart.length > 0 ? (
				<CustomRow>
					<CustomCol nspan={2}>
						{JSON.stringify(cart)}
						<h1>{total}</h1>
						{cart.map((el, i) => (
							<div key={i}>
								<p>{el.name}</p>
								<img src={el.photo}></img>
								<p>{el.quantity}</p>
								<p>{el.price}</p>
								{
									<select value={el.quantity} onChange={e => handleQuantity(e, el._id)}>
										{Array.from(Array(10), (el, i) => i + 1).map(el => (
											<option key={el} value={el}>
												{el}
											</option>
										))}
									</select>
								}
								<button onClick={() => deleteProduct(el._id)}>Delete product</button>
							</div>
						))}
					</CustomCol>
					<CustomCol nspan={1}>
						<h3>Total: {total}</h3>
						<button onClick={clearCart}>Clear cart</button>
						<Checkout total={total}></Checkout>
					</CustomCol>
				</CustomRow>
			) : (
				<h2>Yo have nothing added yet</h2>
			)}
		</>
	)
}
