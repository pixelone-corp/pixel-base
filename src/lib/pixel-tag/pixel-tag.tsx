import React from 'react'
import { Badge } from 'react-bootstrap'
import styled, { css } from 'styled-components'

export interface TagProps extends React.HTMLProps<HTMLDivElement> {
  className?:
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  textColor?: string
  customBackgroundColor?: boolean
}

const tagColors = {
  'non monetory': '#9e9e9e',
  new: '#4caf50',
  delivered: '#4caf50',
  processing: '#009688',
  tracking: '#00bcd4',
  returns: '#f44336',
  complete: '#2196f3',
  'post delivery': '#3f51b5',
  cancelled: '#f44336',
  refunded: '#f44336',
  'partial refunded': '#f44336',
  'partial cancelled': '#f44336',
  'partial tracking': '#00bcd4',
  'partial processing': '#009688',
  'partial new': '#4caf50',
  'partial complete': '#2196f3',
  'partial returns': '#f44336',
  'partial non monetory': '#9e9e9e',
  'partial post delivery': '#3f51b5',
  open: '#ffab40',
  closed: '#f44336',
  'partial ppen': '#4caf50',
  'partial closed': '#f44336',
  refund_partial: '#9e9e9e',
  returned: '#f44336',
  exchange_return: '#9e9e9e',
  exchange_partial: '#9e9e9e',
  product: '#ff4081',
  shipped: '#ef6c00',
  'ready to ship': '#448aff',
  packaging: '#2e7d32',
  canceled: '#f44336',
  failed: '#f44336',
  outofstock: '#f44336',
  'followup-ip': '#f44336',
  'on-hold': '#f44336',
  onlinepayment: '#4caf50',
  prepaid: '#4caf50',
  pending: '#ff9800',
  ready_to_ship: '#448aff',
  confirmed: '#4caf50',
  detain: '#f44336',
  'ready-to-ship': '#448aff',
  'in-transit': '#00bcd4',
  completed: '#2196f3',
  partial_paid: '#4caf50',
  unpaid: '#f44336',
  paid: '#4caf50',
  refund_return: '#3f51b5',
  shopify: '#95BF47',
  low:'#00bcd4',
  medium:'#3f51b5',
  high:'#f44336',
  blocker:'#9e9e9e',
  terminated:'#f44336',
  overdue:  '#cc01fa',
  running:'#9e9e9e',
  todo:'#9e9e9e',
  inprogress:'#3f51b5',
  current:'#4caf50',
  suspended:'#f44336',
  trial:'#3f51b5',
  engaged:'#cc01fa',
  duplicate:'#9e9e9e',
  active:'green',
  series:'#ffeb3b',
  internal:'#ff9800',
  api:'green',
  sync:'#ffeb3b',
  manual:'#f44336',
  inactive:'#f44336',
  ems:'#cc01fa',
  woocom:'#4caf50',
  wix:'#ffeb3b',
  daraz:'#ff9800',
  gsheet:'#3f51b5',
  TCS:'#EF9200',
  Leopard:'#FFCB05',
  'Pakistan Post':'#7c0000',
  Laugix:'#ff9800',
  Forrun:'#C72027',
  Trax:'#4EB86D',
  MNP:'#F26522',
  TCSEnvio:'#2B3D4C',
  Rider:'#008AFF',
  SmartLane:'#00559F',
  GatePass:'#26A3AE',
  CallCourier:'#00B14C',
  DHL:'#D40511',
  TEZZ:'#434F7B',
  'Blue-Ex':'#a9ba19',
  UPS:'#FFC400',
  MoveX:'#228837',
  Swyft:'#B11CCC',
  MXC:'#24478C',
  PostEx:'#000000',
  Daraz:'#F75A08',
  BarqRaftar:'#FF9D01',
}

const getColor = (children, customBackgroundColor) => {
  if (!customBackgroundColor) {
    if (typeof children === 'string') {
      return tagColors[children.toLowerCase()] || '#2e7d32'
    }
  } else {
    return customBackgroundColor
  }
}
export const PixelTag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    {
      className = 'Primary',
      customBackgroundColor = false,
      textColor = 'white',
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <PixelTagStyled>
        <StyledBadge
          data-tag='allowRowEvents'
          className={className}
          bg={className}
          pill
          ref={ref}
          color={`${getColor(children, customBackgroundColor)}`}
        >
          {children}
        </StyledBadge>
      </PixelTagStyled>
    )
  }
)
const PixelTagStyled = styled.div`
  .primary {
    padding: 3px 6px !important;
  }
`

const StyledBadge = styled(Badge) <{ color?: string }>`
  background-color: ${({ color }) => color || '#2e7d32'} !important;
`
export default PixelTag
