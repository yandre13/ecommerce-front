import React, { useState } from 'react'
import { ItemCategory, CheckBoxCategory } from './styles'

export const CheckBoxC = ({ categories, handleFilters }) => {
	const [checked, setChecked] = useState([])

	const handleCategory = e => {
		const value = e.target.value,
			newChecked = [...checked],
			current = checked.indexOf(e.target.value)
		if (e.target.checked) {
			newChecked.push(value)
		} else {
			newChecked.splice(current, 1)
		}
		setChecked(newChecked)
		handleFilters(newChecked)
	}

	return (
		<>
			{categories &&
				categories.map(el => (
					<ItemCategory key={el._id}>
						<CheckBoxCategory
							type="checkbox"
							value={el._id}
							onChange={handleCategory}
						/>{' '}
						{el.name}
					</ItemCategory>
				))}
		</>
	)
}
