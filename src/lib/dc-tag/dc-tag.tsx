import React from 'react'
import { Badge } from 'react-bootstrap'
import styled, { css } from 'styled-components'

export interface DcTagProps extends React.HTMLProps<HTMLDivElement> {
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

// const tagColors = {
//   complete: '#478ffc',
//   'post delivery': '#5f38f9',
//   new: '#2dc58c',
//   returns: '#df3c4e',
//   processing: '#f2bc16',
//   tracking: '#2a8a9d',
//   'non monetory': '#343a40'
// }
// 'non monetory': '#e7e8ea',
// new: '#e6f8f1',
// delivered: '#e6f8f1',
// processing: '#fdf7e3',
// tracking: '#a1edf7',
// returns: '#fbe8ea ',
// complete: '#478ffc',
// 'post delivery': '#ece7fe',
// cancelled: '#fbe8ea',
const tagBgColors = {
  'non monetory': '#e7e8ea',
  new: '#e6f8f1',
  delivered: '#e6f8f1',
  processing: '#fdf7e3',
  tracking: '#a1edf7',
  returns: '#fbe8ea',
  complete: '#e9f2ff',
  'post delivery': '#ece7fe',
  cancelled: '#fbe8ea',
  refunded: '#fbe8ea',
  'partial refunded': '#fbe8ea',
  'partial cancelled': '#fbe8ea',
  'partial tracking': '#a1edf7',
  'partial processing': '#fdf7e3',
  'partial new': '#e6f8f1',
  'partial complete': '#e9f2ff',
  'partial returns': '#fbe8ea',
  'partial non monetory': '#e7e8ea',
  'partial post delivery': '#ece7fe',
  open: '#fdf7e3',
  closed: '#fbe8ea',
  'partial ppen': '#e6f8f1',
  'partial closed': '#fbe8ea',
  refund_partial: '#e7e8ea',
  returned: '#fbe8ea',
  exchange_return: '#e7e8ea',
  exchange_partial: '#e7e8ea',
  product: '#ff4081',
  shipped: '#ef6c00',
  'ready to ship': '#448aff',
  packaging: '#2e7d32',
  canceled: '#fbe8ea',
  failed: '#fbe8ea',
  outofstock: '#fbe8ea',
  'followup-ip': '#fbe8ea',
  'on-hold': '#fbe8ea',
  onlinepayment: '#e6f8f1',
  prepaid: '#e6f8f1',
  pending: '#fdf7e3',
  ready_to_ship: '#448aff',
  confirmed: '#e6f8f1',
  detain: '#fbe8ea',
  'ready-to-ship': '#448aff',
  'in-transit': '#a1edf7',
  completed: '#e9f2ff',
  partial_paid: '#e6f8f1',
  unpaid: '#fbe8ea',
  paid: '#e6f8f1',
  refund_return: '#ece7fe',
  shopify: '#95BF47',
  low: '#a1edf7',
  medium: '#ece7fe',
  high: '#fbe8ea',
  blocker: '#e7e8ea',
  terminated: '#fbe8ea',
  overdue: '#cc01fa',
  running: '#e7e8ea',
  todo: '#e7e8ea',
  inprogress: '#ece7fe',
  current: '#e6f8f1',
  suspended: '#fbe8ea',
  trial: '#ece7fe',
  engaged: '#cc01fa',
  duplicate: '#e7e8ea',
  active: 'green',
  series: '#ffeb3b',
  internal: '#fdf7e3',
  api: 'green',
  sync: '#ffeb3b',
  manual: '#fbe8ea',
  inactive: '#fbe8ea',
  ems: '#cc01fa',
  woocom: '#e6f8f1',
  wix: '#ffeb3b',
  daraz: '#fdf7e3',
  gsheet: '#ece7fe',
  TCS: '#fdf7e3',
  Leopard: '#FFCB05',
  'Pakistan Post': '#7c0000',
  Laugix: '#fdf7e3',
  Forrun: '#C72027',
  Trax: '#4EB86D',
  MNP: '#fdf7e3',
  TCSEnvio: '#2B3D4C',
  Rider: '#008AFF',
  SmartLane: '#00559F',
  GatePass: '#26A3AE',
  CallCourier: '#00B14C',
  DHL: '#D40511',
  TEZZ: '#434F7B',
  'Blue-Ex': '#a9ba19',
  UPS: '#FFC400',
  MoveX: '#228837',
  Swyft: '#B11CCC',
  MXC: '#24478C',
  PostEx: '#000000',
  Daraz: '#fdf7e3',
  BarqRaftar: '#fdf7e3'
}
const tagColors = {
  'non monetory': '#343a40',
  new: '#2dc58c',
  delivered: '#2dc58c',
  processing: '#f2bc16',
  tracking: '#2a8a9d',
  returns: '#df3c4e',
  complete: '#478ffc',
  'post delivery': '#5f38f9',
  cancelled: '#df3c4e',
  refunded: '#df3c4e',
  'partial refunded': '#df3c4e',
  'partial cancelled': '#df3c4e',
  'partial tracking': '#2a8a9d',
  'partial processing': '#f2bc16',
  'partial new': '#2dc58c',
  'partial complete': '#478ffc',
  'partial returns': '#df3c4e',
  'partial non monetory': '#343a40',
  'partial post delivery': '#5f38f9',
  open: '#ffab40',
  closed: '#df3c4e',
  'partial ppen': '#2dc58c',
  'partial closed': '#df3c4e',
  refund_partial: '#343a40',
  returned: '#df3c4e',
  exchange_return: '#343a40',
  exchange_partial: '#343a40',
  product: '#ff4081',
  shipped: '#ef6c00',
  'ready to ship': '#448aff',
  packaging: '#2e7d32',
  canceled: '#df3c4e',
  failed: '#df3c4e',
  outofstock: '#df3c4e',
  'followup-ip': '#df3c4e',
  'on-hold': '#df3c4e',
  onlinepayment: '#2dc58c',
  prepaid: '#2dc58c',
  pending: '#ff9800',
  ready_to_ship: '#448aff',
  confirmed: '#2dc58c',
  detain: '#df3c4e',
  'ready-to-ship': '#448aff',
  'in-transit': '#2a8a9d',
  completed: '#478ffc',
  partial_paid: '#2dc58c',
  unpaid: '#df3c4e',
  paid: '#2dc58c',
  refund_return: '#5f38f9',
  shopify: '#95BF47',
  low: '#2a8a9d',
  medium: '#5f38f9',
  high: '#df3c4e',
  blocker: '#343a40',
  terminated: '#df3c4e',
  overdue: '#cc01fa',
  running: '#343a40',
  todo: '#343a40',
  inprogress: '#5f38f9',
  current: '#2dc58c',
  suspended: '#df3c4e',
  trial: '#5f38f9',
  engaged: '#cc01fa',
  duplicate: '#343a40',
  active: 'green',
  series: '#ffeb3b',
  internal: '#ff9800',
  api: 'green',
  sync: '#ffeb3b',
  manual: '#df3c4e',
  inactive: '#df3c4e',
  ems: '#cc01fa',
  woocom: '#2dc58c',
  wix: '#ffeb3b',
  daraz: '#ff9800',
  gsheet: '#5f38f9',
  TCS: '#EF9200',
  Leopard: '#FFCB05',
  'Pakistan Post': '#7c0000',
  Laugix: '#ff9800',
  Forrun: '#C72027',
  Trax: '#4EB86D',
  MNP: '#F26522',
  TCSEnvio: '#2B3D4C',
  Rider: '#008AFF',
  SmartLane: '#00559F',
  GatePass: '#26A3AE',
  CallCourier: '#00B14C',
  DHL: '#D40511',
  TEZZ: '#434F7B',
  'Blue-Ex': '#a9ba19',
  UPS: '#FFC400',
  MoveX: '#228837',
  Swyft: '#B11CCC',
  MXC: '#24478C',
  PostEx: '#000000',
  Daraz: '#F75A08',
  BarqRaftar: '#FF9D01'
}

const getBgColor = (children, customBackgroundColor) => {
  if (!customBackgroundColor) {
    if (typeof children === 'string') {
      return tagBgColors[children.toLowerCase()] || '#2e7d32'
    }
  } else {
    return customBackgroundColor
  }
}
// create getColor function
const getColor = (children, textColor) => {
  if (textColor) {
    return textColor
  } else {
    if (typeof children === 'string') {
      return tagColors[children.toLowerCase()] || 'white'
    }
  }
}
export const DcTag = React.forwardRef<HTMLDivElement, DcTagProps>(
  (
    {
      className = 'Primary',
      customBackgroundColor = false,
      textColor,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <DcTagStyled>
        <StyledBadge
          data-tag='allowRowEvents'
          className={className}
          bg={className}
          pill
          ref={ref}
          Bgcolor={`${getBgColor(children, customBackgroundColor)}`}
          color={`${getColor(children, textColor)}`}
        >
          {children}
        </StyledBadge>
      </DcTagStyled>
    )
  }
)
const DcTagStyled = styled.div`
  .primary {
    padding: 3px 6px !important;
  }
`

const StyledBadge = styled(Badge) <{ Bgcolor?: string }>`
  background-color: ${({ Bgcolor }) => Bgcolor || '#2e7d32'} !important;
  color: ${({ color }) => color || 'white'} !important;
  padding: 0.35rem 0.5rem;
  border-radius: 0.25rem !important;
  font-size: 0.688rem;
  vertical-align: middle;
  /* padding-y: 0.35rem; */
`
export default DcTag
