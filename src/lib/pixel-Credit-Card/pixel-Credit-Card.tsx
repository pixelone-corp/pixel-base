import React from 'react'

import {
  cardTypesMap,
  getCardType,
  setInitialValidCardTypes,
  validateLuhn
} from './utils/cardHelpers'
import './styles.scss'
export interface CallbackArgument {
  issuer: string
  maxLength: number
}

export type Focused = 'name' | 'number' | 'expiry' | 'cvc' | ''

export interface PixelCreditCardsProps {
  callback?: ((type: CallbackArgument, isValid: boolean) => void) | undefined

  CardInfo:{acceptedCards?: ReadonlyArray<string> | undefined
  cvc?: string | number
  expiry?: string | number
  focused?: Focused | undefined
  issuer?: string | undefined
  short_name?: string | undefined
  locale?: { valid: string } | undefined
  name?: string
  number?: string | number
  placeholders?: { name?: string } | undefined
  preview?: boolean | undefined}
}

export function PixelCreditCards(props: PixelCreditCardsProps) {
  const {
    CardInfo,
    // acceptedCards = [],
    // number,
    // issuer,
    // preview = false,
    // expiry,
    // cvc,
    // focused,
    // locale = {
    //   valid: 'valid thru'
    // },
    // name,
    // placeholders = {
    //   name: 'YOUR NAME HERE'
    // },
    callback
  } = props

  const [cardTypes, setCardTypes] = React.useState(setInitialValidCardTypes())
  const validCardTypes = React.useMemo(() => {
    if (CardInfo?.acceptedCards?.length) {
      return cardTypes?.filter((card) => CardInfo.acceptedCards?.includes(card))
    }

    return cardTypes
  }, [CardInfo?.acceptedCards, cardTypes])

  const cardOptions = React.useMemo(() => {
    let updatedIssuer = 'unknown'

    if (CardInfo?.number) {
      const validatedIssuer = getCardType(CardInfo?.number)

      if (validCardTypes?.includes(validatedIssuer as any)) {
        updatedIssuer = validatedIssuer
      }
    }

    let maxLength = 16

    if (cardTypesMap.amex.includes(updatedIssuer)) {
      maxLength = 15
    } else if (cardTypesMap?.dinersclub.includes(updatedIssuer)) {
      maxLength = 14
    } else if (['hipercard', 'mastercard', 'visa'].includes(updatedIssuer)) {
      maxLength = 19
    }

    return {
      issuer: updatedIssuer,
      maxLength
    }
  }, [CardInfo?.number, validCardTypes])

  const cardIssuer = React.useMemo(
    () => (CardInfo?.preview && CardInfo?.issuer ? CardInfo?.issuer?.toLowerCase() : cardOptions.issuer),
    [cardOptions?.issuer, CardInfo?.issuer, CardInfo?.preview]
  )

  const cardNumber = React.useMemo(() => {
    let maxLength = CardInfo?.preview ? 19 : cardOptions?.maxLength
    let nextNumber =
      typeof CardInfo?.number === 'number'
        ? CardInfo?.number?.toString()
        : String(CardInfo?.number)?.replace(/[A-Za-z]| /g, '')

    if (isNaN(parseInt(nextNumber, 10)) && !CardInfo?.preview) {
      nextNumber = ''
    }

    if (maxLength > 16) {
      maxLength = nextNumber?.length <= 16 ? 16 : maxLength
    }

    if (nextNumber?.length > maxLength) {
      nextNumber = nextNumber?.slice(0, maxLength)
    }

    while (nextNumber?.length < maxLength) {
      nextNumber += '•'
    }

    if (
      cardTypesMap?.amex?.includes(cardIssuer) ||
      cardTypesMap?.dinersclub?.includes(cardIssuer)
    ) {
      const format = [0, 4, 10]
      const limit = [4, 6, 5]
      nextNumber = `${nextNumber.substr(
        format[0],
        limit[0]
      )} ${nextNumber.substr(format[1], limit[1])} ${nextNumber.substr(
        format[2],
        limit[2]
      )}`
    } else if (nextNumber.length > 16) {
      const format = [0, 4, 8, 12]
      const limit = [4, 7]
      nextNumber = `${nextNumber.substr(
        format[0],
        limit[0]
      )} ${nextNumber.substr(format[1], limit[0])} ${nextNumber.substr(
        format[2],
        limit[0]
      )} ${nextNumber.substr(format[3], limit[1])}`
    } else {
      for (let i = 1; i < maxLength / 4; i++) {
        const space_index = i * 4 + (i - 1)
        nextNumber = `${nextNumber.slice(0, space_index)} ${nextNumber.slice(
          space_index
        )}`
      }
    }

    return nextNumber
  }, [cardOptions?.maxLength, cardIssuer, CardInfo?.number, CardInfo?.preview])

  const cardExpiry = React.useMemo(() => {
    const date = typeof CardInfo?.expiry === 'number' ? CardInfo?.expiry.toString() : CardInfo?.expiry
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

  const updateValidCardTypes = React.useCallback(
    (acceptedCardsInput: readonly string[]) => {
      if (acceptedCardsInput.length) {
        setCardTypes(
          cardTypes.filter((card) => acceptedCardsInput.includes(CardInfo?.card))
        )
        return
      }

      const initialValidCardTypes = setInitialValidCardTypes()
      setCardTypes(initialValidCardTypes)
    },
    [cardTypes]
  )

  React.useEffect(() => {
    if (cardNumber !== CardInfo?.number) {
      /* istanbul ignore else */
      if (typeof callback === 'function') {
        callback(cardOptions, validateLuhn(String(CardInfo?.number)))
      }
    }

    const initialValidCardTypes = setInitialValidCardTypes()
    if (initialValidCardTypes.toString() !== cardTypes.toString()) {
      updateValidCardTypes(CardInfo?.acceptedCards)
    }
  }, [
    CardInfo?.acceptedCards,
    callback,
    cardOptions,
    cardNumber,
    updateValidCardTypes,
    CardInfo?.number,
    cardTypes
  ])

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
          <div
            className={[
              'rccs__number',
              cardNumber.replace(/ /g, '').length > 16
                ? 'rccs__number--large'
                : '',
                CardInfo?.focused === 'number' ? 'rccs--focused' : '',
              cardNumber.substr(0, 1) !== '•' ? 'rccs--filled' : ''
            ]
              .join(' ')
              .trim()}
          >
            {cardNumber}
          </div>
          <div
          className={
           CardInfo.name ? 'rccs__name rccs--focused rccs--filled' : 
            'rccs__name'

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
          <div className='rccs__short_name' >{CardInfo?.short_name}</div>
        </div>
        <div className='rccs__card--back'>
          <div className='rccs__card__background' />
          <div className='rccs__stripe' />
          <div className='rccs__signature' />
          <div
            className={['rccs__cvc', CardInfo?.focused === 'cvc' ? 'rccs--focused' : '']
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
