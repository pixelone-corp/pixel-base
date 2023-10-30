import React from 'react'
import styled from 'styled-components'
import { discover, visa, amex, masterCard } from './images'
import PixelIcon from '../pixel-button-icon/pixel-icon'
import { faCreditCard, faXmark } from '@fortawesome/free-solid-svg-icons'
import { ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap'
import {} from '@fortawesome/free-regular-svg-icons'

export interface CallbackArgument {
  issuer: string
  maxLength: number
}

export type Focused = 'name' | 'number' | 'expiry' | 'cvc' | ''

export interface PixelCreditCardsProps {
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
  onApply?: () => void
  setCardAsDefault?: () => void
  isDefault?: boolean
}

export function PixelCreditCards(props: PixelCreditCardsProps) {
  const { CardInfo, onApply, setCardAsDefault, isDefault } = props
  const [cardIssuer, setCardIssuer] = React.useState('')
  console.log(cardIssuer)

  React.useEffect(() => {
    setCardIssuer(CardInfo?.card_type || 'mastercard')
  }, [CardInfo?.card_type])
  const handelApply = () => {
    onApply()
  }
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
  const tooltip = <Tooltip id='tooltip'>Delete</Tooltip>
  const tooltipDefault = (
    <Tooltip id='tooltip'>
      {isDefault ? 'Default Card' : 'Set As Default Card'}
    </Tooltip>
  )
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
          <ButtonToolbar>
            <OverlayTrigger placement='top' overlay={tooltipDefault}>
              <StyledIconContainer
                isDefault={isDefault}
                onClick={() => {
                  setCardAsDefault()
                }}
                style={{ position: 'absolute', top: '0', right: '40px' }}
              >
                <StyledPixelIcon
                  isDefault={isDefault}
                  tooltip={<Tooltip id='tooltip'>{}</Tooltip>}
                  placement='bottom'
                  style={{ position: 'relative' }}
                  icon={faCreditCard}
                />
              </StyledIconContainer>
            </OverlayTrigger>
          </ButtonToolbar>
        </CardFront>
        <ButtonToolbar>
          <OverlayTrigger placement='top' overlay={tooltip}>
            <StyledDiv
              onClick={() => {
                onApply()
              }}
            >
              <Styled_PixelIcon
                style={{ zIndex: '4444444444444' }}
                tooltip='Delete'
                icon={faXmark}
              />
            </StyledDiv>
          </OverlayTrigger>
        </ButtonToolbar>
      </CardContainer>
    </Card>
  )
}

const Card = styled.div`
  margin: 0 auto;
  perspective: 1000px;
  width: 290px;
`
const StyledIconContainer = styled.button`
  margin: 5px 0 0 5px;
  z-index: 44444444444;
  cursor: pointer;
  height: 25px;
  width: 30px;
  display: ${(props) => (props.isDefault ? 'flex' : 'none')};
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #faeaff76;
  position: absolute;
  ${Card}:hover & {
    display: flex;
  }
  top: 0;
  right: 5px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
`

const StyledDiv = styled.button<{ isDefault }>`
  margin: 5px 0 0 5px;
  z-index: 44444444444;
  cursor: pointer;
  height: 25px;
  width: 30px;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #faeaff76;
  position: absolute;
  top: 0;
  right: 5px;

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
`
const Styled_PixelIcon = styled(PixelIcon)`
  color: #df77ff9a;
  ${StyledDiv}:hover & {
    color: #c300ff;
  }
`
const StyledPixelIcon = styled(PixelIcon)<{ isDefault }>`
  color: ${(props) => (props.isDefault ? '#c300ff' : '#df77ff9a')};
  &:hover {
    color: #c300ff;
  }
`
const CardShortName = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  height: 26.3636363636px;
  left: 10%;
  position: absolute;
  top: 12%;
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
  background: ${(props) =>
    props.cardIssuer === 'visa'
      ? 'linear-gradient(25deg, #0f509e, #1399cd)'
      : props.cardIssuer === 'amex'
      ? 'linear-gradient(25deg, #308c67, #a3f2cf)'
      : props.cardIssuer === 'master'
      ? 'linear-gradient(25deg, #fbfbfb, #e8e9e5)'
      : props.cardIssuer === 'discover'
      ? // ? 'linear-gradient(25deg, #fff, #eee)'
        '  linear-gradient(90deg, #23233F 0%, #3A3D63 20%, #8C80A1 50%, #3A3D63 80%, #23233F 100%);'
      : 'none'};

  border-radius: 14.5px;
  color: ${(props) =>
    props.cardIssuer == 'visa'
      ? '#fff'
      : props.cardIssuer === 'amex'
      ? '#fff'
      : props.cardIssuer === 'master'
      ? '#555'
      : props.cardIssuer === 'discover'
      ? '#dedede'
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
      : props.cardIssuer == 'master'
      ? `url(${masterCard})`
      : props.cardIssuer == 'amex'
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
