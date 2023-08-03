import React, { InputHTMLAttributes } from 'react'
import { Card, FormControl } from 'react-bootstrap'
import styled from 'styled-components'

export interface cardProps {
  cardTitle?: React.ReactNode
  subTitle?: string
  headerActions?: React.ReactNode
  cardBody?: React.ReactNode
  cardFooter?: string
  footerActions?: React.ReactNode
  className?: string
  error?: string
  footerAlignment?: any
  children?: any
}

const PixelcardContainer = styled(Card)`
  width: 100%;
`
const CardHeader = styled(Card.Header)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: auto;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.05);
`
const CardHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`
const CardHeaderRight = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: stretch;
  align-content: stretch;
`
const HeaderActions = styled.div``
const CardTitle = styled(Card.Title)`
  padding: 10px 0px 0px 5px;
  margin: 0;
`
const SubTitle = styled(Card.Subtitle)`
  padding: 05px 0px 0px 5px;
  opacity: 0.7;
  font-size: 12px;
`
const CardBody = styled(Card.Body)`
  display: flex;
  justify-content: center;
`
const CardFooter = styled(Card.Footer)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
  border-top: 0.5px solid rgba(0, 0, 0, 0.05);
`

const CardFooterActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props: cardProps) =>
    props.footerAlignment || 'flex-start'};
`
const CardErroe = styled.span`
  font-size: 90%;
  color: rgb(255 0 0 / 64%);
`

export const Pixelcard = React.forwardRef<HTMLInputElement, cardProps>(
  (
    {
      cardTitle = 'CardTitle',
      subTitle = 'subTitle',
      headerActions = 'headerActions',
      cardBody = 'body',
      cardFooter = 'Footer',
      footerActions = 'FooterActions',
      footerAlignment = 'flex-start',
      className,
      error,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <PixelcardContainer>
        <CardHeader>
          <CardHeaderLeft>
            <CardTitle>{cardTitle}</CardTitle>
            <SubTitle>{subTitle}</SubTitle>
          </CardHeaderLeft>
          <CardHeaderRight>
            <HeaderActions>{headerActions}</HeaderActions>
          </CardHeaderRight>
        </CardHeader>
        <CardBody>{children}</CardBody>
        <CardFooter>
          <CardFooterActions footerAlignment={footerAlignment}>
            {footerActions}
          </CardFooterActions>
        </CardFooter>
      </PixelcardContainer>
    )
  }
)
export default Pixelcard
