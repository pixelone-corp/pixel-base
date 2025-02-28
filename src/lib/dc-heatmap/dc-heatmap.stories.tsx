import React from 'react'
import DcHeatMap from './dc-heatmap'

export default {
  title: 'DcHeatMap',
  component: DcHeatMap
}

const Template = (args) => <DcHeatMap {...args} />

function generateRandomData(rows = 24, columns = 7, min = 1, max = 250) {
  const data = Array.from({ length: rows }, () =>
    Array.from(
      { length: columns },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    )
  )
  return data
}

console.log(generateRandomData())

export const Default = Template.bind({})
Default.args = {
  xLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  yLabels: [
    '1 am',
    '2am',
    '3am',
    '4am',
    '5am',
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
    '9pm',
    '10pm',
    '11pm'
  ],
  data: generateRandomData()
}

export const CustomColors = Template.bind({})
CustomColors.args = {
  xLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  yLabels: ['Team A', 'Team B', 'Team C'],
  data: [
    [5, 10, 15, 20, 25],
    [30, 35, 40, 45, 50],
    [55, 60, 65, 70, 75]
  ],
  colorScale: (value) => {
    const intensity = value / 75 // Scale based on max value
    return `rgba(255, 87, 51, ${intensity})` // Orange scale
  }
}
