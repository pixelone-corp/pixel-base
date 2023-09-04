export * from './lib/pixel-popover/pixel-popover'
export * from './lib/pixel-tabs/pixel-tabs'
export * from './lib/pixel-input/pixel-input'
export * from './lib/pixel-chart/pixel-chart'
export * from './lib/pixel-tag/pixel-tag'
export * from './lib/pixel-input-group/pixel-input-group'
export * from './lib/pixel-checkbox-group/pixel-checkbox-group'
export * from './lib/pixel-select-drop-down/pixel-select-drop-down'
export * from './lib/pixel-button/pixel-button'
export * from './lib/pixel-switch/pixel-switch'
export * from './lib/pixel-table/pixel-table'
export * from './lib/pixel-modal/pixel-modal'
export * from './lib/pixel-table-actions/pixel-table-actions'
export * from './lib/pixel-top-bar/pixel-top-bar'
export * from './lib/pixel-breadcrumbs/pixel-breadcrumbs'
export * from './lib/pixel-currency/pixel-currency'
export * from './lib/pixel-drop-dow-menu/pixel-drop-down-menu'
export * from './lib/pixel-dropzone/pixel-dropzone'
export * from './lib/pixel-date/pixel-date'
export * from './lib/pixel-input-tag/PixelInputTag'
export * from './lib/pixel-list-item/pixel-list-item'
export * from './lib/pixel-image/pixel-image'
export * from './lib/pixel-flex-box/pixel-flex-box'
export * from './lib/pixel-list/pixel-list'
export * from './lib/pixel-text/pixel-text'
export * from './lib/pixel-page-container/pixel-page-container'
export * from './lib/pixel-panel-footer/pixel-footer-panel'
export * from './lib/pixel-panel-header/pixel-header-panel'
export * from './lib/pixel-panel-left/pixel-left-panel'
export * from './lib/pixel-panel-right/pixel-right-panel'
export * from './lib/pixel-button-icon/pixel-icon'
export * from './lib/pixel-banners/pixel-banner'
export * from './lib/pixel-user-profile/pixel-user-profile'
export * from './lib/pixel-collapse/pixel-collapse'
export * from './lib/pixel-div/pixel-div'
export * from './lib/pixel-audio-player/pixel-audio-player'
export * from './lib/pixel-tooltip/pixel-tooltip'
export * from './lib/pixel-alert/pixel-alert'
export * from './lib/pixel-date-range-picker/pixelDateRangePicker'
import PixelFactoryContext, {
  PixelFactoryContext as PixelFactory
} from './lib/pixel-factory/pixel-factory'
export { PixelFactoryContext, PixelFactory }

export * from './lib/styleGuide'

export * from './lib/common-styled-component'

export const getAddressByType = (type: string, arr) => {
  return arr.filter(
    (item) => item.address_type.toLowerCase() === type.toLowerCase()
  )
}
export const getAddressByID = (id: number, arr) => {
  return arr.find((item) => item.address_id === id)
}
