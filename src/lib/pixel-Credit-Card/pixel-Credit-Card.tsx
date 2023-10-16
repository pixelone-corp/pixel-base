import React from 'react'

import './styles.scss'
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
    <div key='Cards' className='rccs'>
      <div
        className={[
          'rccs__card',
          `rccs__card--${cardIssuer}`,
          CardInfo?.focused === 'cvc' && cardIssuer !== 'american-express'
            ? 'rccs__card--flipped'
            : ''
        ]
          .join(' ')
          .trim()}
      >
        <div className='rccs__card--front'>
          <div className='rccs__card__background' />
          <div className='rccs__issuer' />
          <div
            className={[
              'rccs__cvc__front',
              CardInfo?.focused === 'cvc' ? 'rccs--focused' : ''
            ]
              .join(' ')
              .trim()}
          >
            {CardInfo?.cvc}
          </div>
          <div className={'rccs__number--large rccs__number rccs--focused'}>
            •••• •••• •••• {CardInfo.number}
          </div>
          <div
            className={
              CardInfo.name
                ? 'rccs__name rccs--focused rccs--filled'
                : 'rccs__name'
            }
          >
            {CardInfo?.name || CardInfo?.placeholders?.name}
          </div>
          <div
            className={[
              'rccs__expiry',
              CardInfo?.focused === 'expiry' ? 'rccs--focused' : '',
              cardExpiry.substr(0, 1) !== '•' ? 'rccs--filled' : ''
            ]
              .join(' ')
              .trim()}
          >
            <div className='rccs__expiry__valid'>{CardInfo?.locale?.valid}</div>
            <div className='rccs__expiry__value'>{cardExpiry}</div>
          </div>
          <div className='rccs__short_name'>{CardInfo?.short_name}</div>
        </div>
        <div className='rccs__card--back'>
          <div className='rccs__card__background' />
          <div className='rccs__stripe' />
          <div className='rccs__signature' />
          <div
            className={[
              'rccs__cvc',
              CardInfo?.focused === 'cvc' ? 'rccs--focused' : ''
            ]
              .join(' ')
              .trim()}
          >
            {CardInfo?.cvc}
          </div>
          <div className='rccs__issuer' />
        </div>
      </div>
    </div>
  )
}
export default PixelCreditCards
