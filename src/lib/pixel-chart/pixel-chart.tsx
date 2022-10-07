import React from 'react'
import styled from 'styled-components'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import noData from 'highcharts/modules/no-data-to-display'

noData(Highcharts)
export interface ChartProps {
  className: string
  options: Highcharts.Options
}
const StyledContainer = styled.div``

export const PixelChart = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ className, options, ...rest }, ref) => {
    return (
      <StyledContainer ref={ref} className={className}>
        <HighchartsReact {...rest} highcharts={Highcharts} options={options} />
      </StyledContainer>
    )
  }
)
export default PixelChart
