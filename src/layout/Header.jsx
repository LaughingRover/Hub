import Logo from '../components/common/logo/Logo'
import { NavLink } from 'react-router-dom'

export const LoginHeader = () => {

	return (
		<div>
			<NavLink to='/' ><Logo /></NavLink>
		</div>
	)
};