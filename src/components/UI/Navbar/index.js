import React, { useState, useEffect } from 'react'
import { Toolbar } from './Toolbar'
import { SideDrawer } from './SideDrawer'
import { BackDrop } from './BackDrop'

export const Navbar = () => {
	const [show, setShow] = useState(false),
		[width, setWidth] = useState(() => window.innerWidth),
		right = false

	const handleShow = () => setShow(!show)

	useEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth))
		return () =>
			window.removeEventListener('resize', () => setWidth(window.innerWidth))
	}, [width])

	return (
		<>
			<Toolbar width={width} show={show} setShow={handleShow} right={right} />
			{width < 768 && <SideDrawer show={show} right={right} />}
			{show && width < 768 && <BackDrop setShow={handleShow} />}
		</>
	)
}
