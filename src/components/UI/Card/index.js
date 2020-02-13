import React from 'react'
import { CardContainer, ImgContainer, Content, Link } from './styles'
import { Text } from '../Text'
import { useStateValue } from '../../../state'
//For cart
import { addProduct } from '../../../helpers/addProduct'
import { useLocaleStorage } from '../../../hooks/useLocalStorage'

export const Card = ({
	border,
	buttonView,
	photo,
	_id,
	name,
	description,
	price,
	children,
}) => {
	//For cart
	const [{ cart }, dispatch] = useStateValue()
	const [storedValue, setStoredValue] = useLocaleStorage('cart', [])

	return (
		<CardContainer border={border}>
			<ImgContainer border={border}>
				<img src={photo} />
			</ImgContainer>
			<Content>
				<Text type={{ tag: 'h4' }} align={'left'}>
					{name}
				</Text>
				<Text type={{ tag: 'p' }} align={'left'}>
					{description}
				</Text>
				<Text type={{ tag: 'p' }} align={'left'}>
					{price}
				</Text>
				{children}
				{buttonView && (
					<Link view={1} to={`/product/${_id}`}>
						View product
					</Link>
				)}
				<button
					onClick={() =>
						addProduct(
							{ _id, name, photo, description, price, quantity: 1 },
							cart,
							dispatch,
							setStoredValue
						)
					}
				>
					Add to cart
				</button>
			</Content>
		</CardContainer>
	)
}
