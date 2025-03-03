import styled, { css } from 'styled-components';

const fixedCSS = css`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`;

const Head = styled.div<{
	$fixedHeader?: boolean;
}>`
/* padding: 0 10px !important; */
border-top: 1px solid ${({ theme }) => theme.head.borderColor};
border-bottom: 1px solid ${({ theme }) => theme.head.borderColor};
	display: flex;
	width: 100%;
	${({ $fixedHeader }) => $fixedHeader && fixedCSS};
	${({ theme }) => theme.head.style};
`;

export default Head;
