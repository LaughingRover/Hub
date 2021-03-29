import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { LoginHeader } from '../layout/Header'
import styled, { css } from 'styled-components'
import { Colors } from '../utils/Colors'

const NavItem = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0.5rem 2rem;
	.links {
		width: 20rem;
		display: flex;
		justify-content: space-between;
	}
`

const StyledNavLink =  styled(NavLink)`
	text-decoration: none;
	color: black;
	position: relative;

	:before {
		content: "";
		height: 3px;
		width: 0;
		position: absolute;
		left: 0;
		bottom: -5px;
		background: ${Colors.torquoise};
		transition: 300ms;

	}

	&:hover::before {
		width: 100%
	}
`


export const Nav = () => {
	const [isLoggedIn, _] = useContext(AuthContext)

	return (
		<NavItem>
			<LoginHeader />

			<div className='links'>
				<StyledNavLink to='/' >Home</StyledNavLink>
				<StyledNavLink to='/exhibition' >Exhibition</StyledNavLink>
				{isLoggedIn && <StyledNavLink to='/dashboard' >Dashboard</StyledNavLink>}
				{isLoggedIn ? <StyledNavLink to='/signin' >logout</StyledNavLink> : <StyledNavLink to='/signin' >SignIn</StyledNavLink>}
			</div>
		</NavItem>
	)
}