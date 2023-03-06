import React from 'react'
import NavLink from './NavLink'
import {navLinks} from './navLinks'

const Nav = () => {
	return (
		<nav>
			{navLinks.map(({navLinkId, scrollToId}, idx) => (
				<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
			))}
		</nav>
	)
}

export default Nav
