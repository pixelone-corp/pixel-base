import React from 'react'
import styled from 'styled-components'
import { discover, visa, amex, masterCard } from './images'

export interface CallbackArgument {
  issuer: string
  maxLength: number
}

export type Focused = 'name' | 'number' | 'expiry' | 'cvc' | ''

export interface PixelCreditCardsProps {
  callback?: ((type: CallbackArgument, isValid: boolean) => void) | undefined

  CardInfo: {
    acceptedCards?: ReadonlyArray<string> | undefined
    cvc?: string | number
    expiry?: string | number
    focused?: Focused | undefined
    issuer?: string | undefined
    short_name?: string | undefined
    locale?: { valid: string } | undefined
    name?: string
    number?: string | number
    placeholders?: { name?: string } | undefined
    preview?: boolean | undefined
    card_type?: string | undefined
  }
}

export function PixelCreditCards(props: PixelCreditCardsProps) {
  const { CardInfo } = props
  const [cardIssuer, setCardIssuer] = React.useState('')
  console.log(cardIssuer)

  React.useEffect(() => {
    setCardIssuer(CardInfo?.card_type || 'mastercard')
  }, [CardInfo?.card_type])

  const cardExpiry = React.useMemo(() => {
    const date =
      typeof CardInfo?.expiry === 'number'
        ? CardInfo?.expiry.toString()
        : CardInfo?.expiry
    let month = ''
    let year = ''
    if (date?.includes('/')) {
      ;[month, year] = date?.split('/')
    } else if (date?.length) {
      month = date?.substr(0, 2)
      year = date?.substr(2, 6)
    }

    while (month?.length < 2) {
      month += '•'
    }

    if (year?.length > 2) {
      year = year.substr(2, 4)
    }

    while (year?.length < 2) {
      year += '•'
    }

    return `${month}/${year}`
  }, [CardInfo?.expiry])

  return (
    <Card>
      <CardContainer cardIssuer={cardIssuer}>
        <CardFront cardIssuer={cardIssuer}>
          <CardBackground cardIssuer={cardIssuer} />
          <CardLogo cardIssuer={cardIssuer} />

          <CardNumber>•••• •••• •••• {CardInfo.number}</CardNumber>
          <CardName>{CardInfo?.name || CardInfo?.placeholders?.name}</CardName>
          <CardValidityExpiry>
            <CardValidity>{CardInfo?.locale?.valid}</CardValidity>
            <CardExpiry>{cardExpiry}</CardExpiry>
          </CardValidityExpiry>
          <CardShortName>{CardInfo?.short_name}</CardShortName>
        </CardFront>
      </CardContainer>
    </Card>
  )
}
const Card = styled.div`
  margin: 0 auto;
  perspective: 1000px;
  width: 290px;
`
const CardShortName = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  height: 26.3636363636px;
  left: 10%;
  position: absolute;
  top: 10%;
  width: 145px;
`
const CardValidity = styled.div`
  font-size: 10px;
  margin-bottom: 5px;
`
const CardValidityExpiry = styled.div`
  bottom: 15%;
  font-size: 0;
  line-height: 1;
  position: absolute;
  right: 10%;
`
const CardExpiry = styled.div`
  font-family: 'Consolas', 'Courier', monospace;
  font-size: 16px;
`
const CardName = styled.div`
  bottom: 15%;
  font-family: 'Consolas', 'Courier', monospace;
  font-size: 17px;
  left: 10%;
  line-height: 1;
  overflow: hidden;
  position: absolute;
  text-align: left;
  text-overflow: ellipsis;
  text-transform: uppercase;
  width: 60%;
  opacity: 0.5;
  transition: opacity 0.3s;
  opacity: 0.8 !important;

  font-weight: 700;
  opacity: 1 !important;
`
const CardNumber = styled.div`
  font-size: 17px;
  clear: both;
  font-family: 'Consolas', 'Courier', monospace;
  font-size: 20px;
  left: 10%;
  position: absolute;
  top: 45%;
  opacity: 0.5;
  transition: opacity 0.3s;
  font-weight: 700;
  opacity: 1 !important;
`
const CardContainer = styled.div<{ cardIssuer }>`
  height: 182.872997856px;
  margin: 0 auto;
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.4s linear;
  width: 290px;
  background-color: linear-gradient(25deg, #0f509e, #1399cd);
`
const CardFront = styled.div<{ cardIssuer }>`
  backface-visibility: hidden;
  /* background:linear-gradient(25deg, #0f509e, #1399cd);  */
  background: ${(props) =>
    props.cardIssuer === 'visa'
      ? 'linear-gradient(25deg, #0f509e, #1399cd)'
      : props.cardIssuer === 'american-express'
      ? 'linear-gradient(25deg, #308c67, #a3f2cf)'
      : props.cardIssuer === 'masterCard'
      ? 'linear-gradient(25deg, #fbfbfb, #e8e9e5)'
      : props.cardIssuer === 'discover'
      ? 'linear-gradient(25deg, #fff, #eee)'
      : 'none'};

  border-radius: 14.5px;
  color: ${(props) =>
    props.cardIssuer == 'visa'
      ? '#fff'
      : props.cardIssuer === 'american-express'
      ? '#fff'
      : props.cardIssuer === 'masterCard'
      ? '#555'
      : props.cardIssuer === 'discover'
      ? '#555'
      : 'none'};
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  transform-style: preserve-3d;
  width: 100%;
  box-shadow: 1px 1px 12px 2px #d7d7d7;
`
const CardLogo = styled.div<{ cardIssuer: string }>`
  background-position: top right;
  background-repeat: no-repeat;
  background-size: contain;

  height: 23%;
  position: absolute;
  right: 10%;
  top: 10%;
  width: 40%;
  background-image: ${(props) =>
    props.cardIssuer === 'discover'
      ? `url(${discover})`
      : props.cardIssuer === 'visa'
      ? `url(${visa})`
      : props.cardIssuer == 'masterCard'
      ? `url(${masterCard})`
      : props.cardIssuer == 'american-express'
      ? `url(${amex})`
      : 'visa'};
`

const CardBackground = styled.div<{ cardIssuer: string }>`
  background: linear-gradient(25deg, #0f509e, #1399cd);

  height: 200%;
  position: absolute;
  top: -60%;
  transform: rotate(25deg);
  transition: all 0.5s ease-out;
  width: 150%;
  left: -170%;
`

export default PixelCreditCards
