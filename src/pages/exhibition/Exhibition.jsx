import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../utils/Colors'

const Deck = styled.div`
	margin: 2rem 2rem;
	display: flex;
	flex-wrap: wrap;
	.card1 {
		width: 40rem;
		height: 25rem;
		margin: 1rem 1rem;
		background: darkblue;
	}
	.card2 {
		width: 30rem;
		height: 25rem;
		margin: 1rem 1rem;
		background: purple;
	}
`

const Exhibition = () => {

	return (
		<Deck>
			<div className='card1' ></div>
			<div className='card2' ></div>
			<div className='card2' ></div>
			<div className='card1' ></div>

		</Deck>
	)

};  export default Exhibition