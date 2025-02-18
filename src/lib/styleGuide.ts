// row.dispatch_status === 'open'
// ? $DCWarningColor
// : row.dispatch_status === 'packaging'
// ? $DCInfoColor
// : row.dispatch_status === 'ready to ship'
// ? $DCSuccessColor
// : row.dispatch_status === 'shipped'
// ? $DCDangerColor // Changed color for shipped
// : $DCsecondaryColor
// }
// customBackgroundColor={
// row.dispatch_status === 'open'
// ? '#fdf7e3' // Light Yellow for Open
// : row.dispatch_status === 'packaging'
// ? '#d6e4ff' // Light Blue for Packaging
// : row.dispatch_status === 'ready to ship'
// ? '#d1fae5' // Light Green for Ready to Ship
// : row.dispatch_status === 'shipped'
// ? '#fce8e8' // Light Red for Shipped
// : '#e5e7eb' // Default Background

let $primaryColor: string = '#9b02fd'
let $DCprimaryColor: string = 'red'
let $DCsecondaryColor: string = '#374151'
let $DCSuccessColor: string = '#2dc58c'
let $DCWarningColor: string = '#f2bc16'
let $DCDangerColor: string = '#df3c4e'
let $DCInfoColor: string = '#478ffc'
let $DCLightColor: string = '#e5e7eb'
let $DCprimaryLightColor: string = '#d6e4ff'
let $DCsecondaryLightColor: string = '#374151'
let $DCSuccessLightColor: string = '#d1fae5'
let $DCWarningLightColor: string = '#fdf7e3'
let $DCDangerLightColor: string = '#fce8e8'
let $DCInfoLightColor: string = '#d6e4ff'
let $DCLightestColor: string = '#f3f4f6'
let $DCprimaryShadowColor: string = 'rgba(95, 56, 249, .2);'
let $DCprimaryActiveColor: string = '#4c2dc7'
let $DCsecondaryActiveColor: string = '#2c3441'
let $DCSuccessActiveColor: string = '#249e70'
let $DCWarningActiveColor: string = '#f5c945'
let $DCDangerActiveColor: string = '#b2303e'
let $DCInfoActiveColor: string = '#3972ca'
let $DCLightActiveColor: string = '#b7b9bc'
let $secondaryColor: string = '#db01f9'
const $textColor: string = '#171717'
const $standardFontSize: string = '16px'
const $headingFontSize: string = '23px'
const $infoFontSize: string = '14px'

const $default_primary = '#9b02fd'
const $red_accent = '#ff5252'
const $red_primary = '#f44336'
const $red_secondary = '#d32f2f'
const $red_warm = '#c62828'
const $pink_accent = '#ff4081'
const $pink_primary = '#e91e63'
const $pink_secondary = '#c2185b'
const $pink_warm = '#ad1457'
const $purple_accent = '#e040fb'
const $purple_primary = '#9c27b0'
const $purple_secondary = '#7b1fa2'
const $purple_warm = '#6a1b9a'
const $deep_purple_accent = '#7c4dff'
const $deep_purple_primary = '#9b02fd'
const $deep_purple_secondary = '#512da8'
const $deep_purple_warm = '#4527a0'
const $indigo_accent = '#536dfe'
const $indigo_primary = '#3f51b5'
const $indigo_secondary = '#303f9f'
const $indigo_warm = '#283593'
const $blue_accent = '#448aff'
const $blue_primary = '#2196f3'
const $blue_secondary = '#1976d2'
const $blue_warm = '#1565c0'
const $light_blue_accent = '#40c4ff'
const $light_blue_primary = '#03a9f4'
const $light_blue_secondary = '#0288d1'
const $light_blue_warm = '#0277bd'
const $cyan_accent = '#18ffff'
const $cyan_primary = '#00bcd4'
const $cyan_secondary = '#0097a7'
const $cyan_warm = '#00838f'
const $teal_accent = '#64ffda'
const $teal_primary = '#009688'
const $teal_secondary = '#00796b'
const $teal_warm = '#00695c'
const $green_accent = '#69f0ae'
const $green_primary = '#4caf50'
const $green_secondary = '#388e3c'
const $green_warm = '#2e7d32'
const $light_green_accent = '#b2ff59'
const $light_green_primary = '#8bc34a'
const $light_green_secondary = '#689f38'
const $light_green_warm = '#558b2f'
const $lime_accent = '#eeff41'
const $lime_primary = '#cddc39'
const $lime_secondary = '#afb42b'
const $lime_warm = '#9e9d24'
const $yellow_accent = '#ffff00'
const $yellow_primary = '#ffeb3b'
const $yellow_secondary = '#fbc02d'
const $yellow_warm = '#f9a825'
const $amber_accent = '#ffd740'
const $amber_primary = '#ffc107'
const $amber_secondary = '#ffa000'
const $amber_warm = '#ff8f00'
const $orange_accent = '#ffab40'
const $orange_primary = '#ff9800'
const $orange_secondary = '#f57c00'
const $orange_warm = '#ef6c00'
const $deep_orange_accent = '#ff6e40'
const $deep_orange_primary = '#ff5722'
const $deep_orange_secondary = '#e64a19'
const $deep_orange_warm = '#d84315'
const $brown_accent = '#bcaaa4'
const $brown_primary = '#795548'
const $brown_secondary = '#5d4037'
const $brown_warm = '#4e342e'
const $grey_accent = '#e9e9e9'
const $grey_primary = '#9e9e9e'
const $grey_secondary = '#616161'
const $grey_warm = '#424242'
const $blue_grey_accent = '#b0bec5'
const $blue_grey_primary = '#9e9e9e'
const $blue_grey_secondary = '#616161'
const $blue_grey_warm = '#424242'
interface Theme {
  primary: string
  secondary: string
}
const changeTheme = (ThemeColors: Theme) => {
  $primaryColor = ThemeColors.primary
  $secondaryColor = ThemeColors.secondary
}
const addAlpha = (color, opacity) => {
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
  return color + _opacity.toString(16).toUpperCase()
}

const $primaryWithAlpha = (op: string) => addAlpha($primaryColor, op)
const $secondaryWithAlpha = (op: string) => addAlpha($secondaryColor, op)
const $textColorWithAlpha = (op: string) => addAlpha($textColor, op)

export {
  changeTheme,
  $DCprimaryLightColor,
  $DCsecondaryLightColor,
  $DCSuccessLightColor,
  $DCWarningLightColor,
  $DCDangerLightColor,
  $DCInfoLightColor,
  $DCLightestColor,
  $DCprimaryColor,
  $DCprimaryShadowColor,
  $DCsecondaryColor,
  $DCSuccessColor,
  $DCWarningColor,
  $DCDangerColor,
  $DCInfoColor,
  $DCLightColor,
  $DCSuccessActiveColor,
  $DCWarningActiveColor,
  $DCDangerActiveColor,
  $DCInfoActiveColor,
  $DCLightActiveColor,
  $DCprimaryActiveColor,
  $DCsecondaryActiveColor,
  $primaryColor,
  $secondaryColor,
  $primaryWithAlpha,
  $secondaryWithAlpha,
  $textColor,
  $textColorWithAlpha,
  $standardFontSize,
  $headingFontSize,
  $infoFontSize,
  $default_primary,
  $red_accent,
  $red_primary,
  $red_secondary,
  $red_warm,
  $pink_accent,
  $pink_primary,
  $pink_secondary,
  $pink_warm,
  $purple_accent,
  $purple_primary,
  $purple_secondary,
  $purple_warm,
  $deep_purple_accent,
  $deep_purple_primary,
  $deep_purple_secondary,
  $deep_purple_warm,
  $indigo_accent,
  $indigo_primary,
  $indigo_secondary,
  $indigo_warm,
  $blue_accent,
  $blue_primary,
  $blue_secondary,
  $blue_warm,
  $light_blue_accent,
  $light_blue_primary,
  $light_blue_secondary,
  $light_blue_warm,
  $cyan_accent,
  $cyan_primary,
  $cyan_secondary,
  $cyan_warm,
  $teal_accent,
  $teal_primary,
  $teal_secondary,
  $teal_warm,
  $green_accent,
  $green_primary,
  $green_secondary,
  $green_warm,
  $light_green_accent,
  $light_green_primary,
  $light_green_secondary,
  $light_green_warm,
  $lime_accent,
  $lime_primary,
  $lime_secondary,
  $lime_warm,
  $yellow_accent,
  $yellow_primary,
  $yellow_secondary,
  $yellow_warm,
  $amber_accent,
  $amber_primary,
  $amber_secondary,
  $amber_warm,
  $orange_accent,
  $orange_primary,
  $orange_secondary,
  $orange_warm,
  $deep_orange_accent,
  $deep_orange_primary,
  $deep_orange_secondary,
  $deep_orange_warm,
  $brown_accent,
  $brown_primary,
  $brown_secondary,
  $brown_warm,
  $grey_accent,
  $grey_primary,
  $grey_secondary,
  $grey_warm,
  $blue_grey_accent,
  $blue_grey_primary,
  $blue_grey_secondary,
  $blue_grey_warm
}
