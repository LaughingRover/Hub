import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import StyledInput from '../../components/common/input/StyledInput'
import { StyledButton } from '../../components/common/button/Button'
import StyledCheckbox from '../../components/common/checkbox/Checkbox'
import { Colors } from '../../utils/Colors'
import { AuthContext } from '../../context/AuthContext'


const Main = styled.main`
	width: 1280px;
  min-width: 1280px;
  margin: 2rem auto;
	display: flex;
	justify-content: center;
  .sso-row {
		width: 12.5rem;
    display: flex;
    align-items: center;
		margin-top: 2rem;
		justify-content: space-between;
	}
	.sso-container {
		display: flex;
		margin-top: -2rem;
		align-items: center;
		justify-content: center;
	}
	.column {
		display: flex;
		flex-direction: column;
		width: 18rem;
		height: 5.5rem;
		justify-content: space-between;
	}
	.checkbox {
		display: block;
		padding: 1rem 0;
	}
	.center {
		display: flex;
		justify-content: center;
	}
	.divider {
		margin-top: 0.5rem;
		font-size: 0.8rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	hr {
		width: 4.5rem;
		border: 1px solid ;
		background: ${Colors.grey_background};
	}
	a {
		text-decoration: none;
		color: ${Colors.hover};
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
			transition-origin: center;
		}
	
		&:hover::before {
			width: 100%
		}
	}
`
const Shadow = styled.div`
	width: 25rem;
	height: 30rem;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	border-radius: 5px;
	background: #F3F3E7;
	box-shadow: 0px 2px 15px rgb(0 0 0 / 50%);
`


const SignIn = () => {
	const [_, setIsLoggedIn] = useContext(AuthContext)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log({ username, password })
		if (username === 'admin' && password === 'admin') {
			setIsLoggedIn(true)
			history.push('/dashboard')
		} else {
			history.push('/signin')
		}
	}

	return (
		<>

			<Main>
				<Shadow>
					<form onSubmit={handleSubmit} >
						<h1>Sign In</h1>
						<p>New User? <a href="/">Create an account</a></p>

						<div className='column'>
							<StyledInput
								type='text'
								name='username'
								id='username'
								placeholder="Username or email"
								value={username}
								onChange={(e) => setUsername(e.target.value)} />

							<StyledInput
								type='password'
								name='password'
								id='password'
								placeholder='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)} />
						</div>
						<div className='checkbox'>
							<StyledCheckbox /><label>Keep me signed in</label>
						</div>

						<div className='center'>
							<StyledButton
								type='submit' primary > SIGN IN </StyledButton>
						</div>

						<div className="divider">
							<hr />
							<p> Or Sign In With </p>
							<hr />
						</div>
						<div className='sso-container'>
							<div className='sso-row'>
								<StyledButton >Google</StyledButton>
								<StyledButton >Facebook</StyledButton>
							</div>
						</div>

					</form>

				</Shadow>
			</Main>
		</>
	)

}; export default SignIn