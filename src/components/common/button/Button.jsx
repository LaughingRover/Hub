import React from 'react'
import styled, { css } from 'styled-components';
import { Colors } from '../../../utils/Colors'

const Button = styled.button`
	width: 6rem;
	padding: 0.8rem 1rem;
	font-size: 0.7rem;
	text-align: center;
	color: white;
	text-decoration: none;
	outline: none;
	border: none;
	border-radius: 15px;
	background-color: ${Colors.grey_background};

	&:active,
  &:focus,  
  &:hover {
    cursor: pointer;
		background: ${Colors.hover};
  }

	${({primary}) => primary && css`
		padding: 1rem;
		width: 100%;
		font-size: 1rem;
		font-weight: bold;
		border-radius: 4px;
    background: ${Colors.hover};

		&:hover {
			background: ${Colors.torquoise}
		}
  `};
`;

export const StyledButton = (props) => {
	return (
		<Button type={props.type} {...props}>
			{props.children}
		</Button>
	)
};