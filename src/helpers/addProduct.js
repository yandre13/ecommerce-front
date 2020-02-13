export const addProduct = (rest, cart, dispatch, setStoredValue) => {
	const product = { ...rest }
	console.log(rest)
	dispatch({
		type: 'setCart',
		setNewCart: [...cart, product],
	})
	setStoredValue([...new Set(cart), product])
	cart.map(el => {
		if (el._id === product._id) {
			el.quantity = el.quantity + 1
			dispatch({
				type: 'setCart',
				setNewCart: [...new Set(cart)],
			})
		}
	})
}
