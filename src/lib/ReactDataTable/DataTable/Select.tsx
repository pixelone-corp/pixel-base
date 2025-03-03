import * as React from 'react';
import styled from 'styled-components';
import Down from '../icons/Down';

const SelectControl = styled.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;
	background-size: 16px 12px;
	border: 0.0625rem solid #d2d4e4;
	border-radius: 0.375rem;
	color: #43476b;
	display: block;
	font-size: 0.875rem;
	font-weight: 400;
	line-height: 1.5rem;
	padding: 0.5625rem 3.375rem 0.5625rem 1.125rem;
	transition:
		border-color 0.15sease-in-out,
		box-shadow 0.15sease-in-out;

	&:focus {
		border: 0.0625rem solid #5064ff;
	}
	/* &:hover{
			border: .0625rem solid #5064ff;
		} */
	&:focus-visible {
		outline: none;
		border-color: rgba(95, 56, 249, 0.65);
		box-shadow: 0 0 5px 0 rgba(95, 56, 249, 0.2);
		outline: 0;
	}
	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`;

const SelectWrapper = styled.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;
	/* border: 1px solid #000; */
	background-repeat: no-repeat;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`;

type SelectProps = {
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	defaultValue: string | number;
	children: React.ReactNode;
};

const Select = ({ defaultValue, onChange, ...rest }: SelectProps): JSX.Element => (
	<SelectWrapper>
		<SelectControl onChange={onChange} defaultValue={defaultValue} {...rest} />
		<div style={{ position:'absolute', right: '10px', top: '10px' }}>
		<Down />
		</div>
	</SelectWrapper>
);

export default Select;
