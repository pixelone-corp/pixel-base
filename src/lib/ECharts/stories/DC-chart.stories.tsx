import { Meta, StoryObj } from '@storybook/react'
import Chart from '../charts/DC-chart'

const meta: Meta<typeof Chart> = {
  title: 'Components/Chart',
  component: Chart,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Chart>

// Sample data for different chart types
const lineChartData = {
  xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  series: [
    {
      name: 'Email',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      data: [220, 182, 191, 234, 290, 330, 310]
    }
  ]
}

const areaChartData = {
  xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  series: [
    {
      name: 'Direct',
      data: [320, 332, 301, 334, 390, 330, 320],
      areaStyle: { opacity: 0.8 }
    },
    {
      name: 'Email',
      data: [120, 132, 101, 134, 90, 230, 210],
      areaStyle: { opacity: 0.8 }
    }
  ]
}

const barChartData = {
  xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  series: [
    {
      name: 'Direct',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Email',
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]
}

const stackedBarChartData = {
  xAxis: ['Q1', 'Q2', 'Q3', 'Q4'],
  stackName: 'sales',
  series: [
    {
      name: 'Electronics',
      data: [320, 302, 341, 374],
      itemStyle: { color: '#5470c6' }
    },
    {
      name: 'Clothing',
      data: [120, 132, 101, 134],
      itemStyle: { color: '#91cc75' }
    },
    {
      name: 'Home Goods',
      data: [220, 182, 191, 234],
      itemStyle: { color: '#fac858' }
    },
    {
      name: 'Groceries',
      data: [150, 212, 201, 154],
      itemStyle: { color: '#ee6666' }
    }
  ]
}

const mixedLineBarChartData = {
  xAxis: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],
  dualYAxis: true,
  yAxisNames: ['Revenue ($)', 'Growth (%)'],
  series: [
    {
      name: 'Revenue',
      type: 'bar',
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      ],
      itemStyle: { color: '#5470c6' }
    },
    {
      name: 'Growth',
      type: 'line',
      yAxisIndex: 1,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
      lineStyle: { color: '#91cc75' },
      symbolSize: 8
    }
  ]
}

const horizontalBarChartData = {
  yAxis: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
  series: [
    {
      name: 'Series 1',
      data: [120, 200, 150, 80, 70]
    },
    {
      name: 'Series 2',
      data: [90, 110, 85, 120, 140]
    }
  ]
}

const pieChartData = {
  name: 'Access From',
  series: [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' }
  ]
}

const heatmapData = {
  xAxis: [
    '12a',
    '1a',
    '2a',
    '3a',
    '4a',
    '5a',
    '6a',
    '7a',
    '8a',
    '9a',
    '10a',
    '11a',
    '12p',
    '1p',
    '2p',
    '3p',
    '4p',
    '5p',
    '6p',
    '7p',
    '8p',
    '9p',
    '10p',
    '11p'
  ],
  yAxis: [
    'Saturday',
    'Friday',
    'Thursday',
    'Wednesday',
    'Tuesday',
    'Monday',
    'Sunday'
  ],
  showLabel: true,
  min: 0,
  max: 10,
  series: [
    [0, 0, 5],
    [0, 1, 1],
    [0, 2, 0],
    [0, 3, 0],
    [0, 4, 0],
    [0, 5, 0],
    [0, 6, 0],
    [1, 0, 7],
    [1, 1, 2],
    [1, 2, 0],
    [1, 3, 0],
    [1, 4, 0],
    [1, 5, 0],
    [1, 6, 0],
    [2, 0, 3],
    [2, 1, 1],
    [2, 2, 0],
    [2, 3, 0],
    [2, 4, 0],
    [2, 5, 0],
    [2, 6, 0],
    [3, 0, 0],
    [3, 1, 2],
    [3, 2, 0],
    [3, 3, 0],
    [3, 4, 0],
    [3, 5, 0],
    [3, 6, 0]
  ].map((item) => {
    return [item[1], item[0], item[2] || '-']
  })
}

export const LineChart: Story = {
  args: {
    type: 'line',
    data: lineChartData,
    height: 400,
    width: 800
  }
}

export const AreaChart: Story = {
  args: {
    type: 'area',
    data: areaChartData,
    height: 400,
    width: 800
  }
}

export const BarChart: Story = {
  args: {
    type: 'bar',
    data: barChartData,
    height: 400,
    width: 800
  }
}

export const StackedBarChart: Story = {
  args: {
    type: 'stackedBar',
    data: stackedBarChartData,
    height: 400,
    width: 800
  }
}

export const MixedLineBarChart: Story = {
  args: {
    type: 'mixedLineBar',
    data: mixedLineBarChartData,
    height: 400,
    width: 800
  }
}

export const HorizontalBarChart: Story = {
  args: {
    type: 'horizontalBar',
    data: horizontalBarChartData,
    height: 400,
    width: 800
  }
}

export const PieChart: Story = {
  args: {
    type: 'pie',
    data: pieChartData,
    height: 400,
    width: 800
  }
}

export const HeatmapChart: Story = {
  args: {
    type: 'heatmap',
    data: heatmapData,
    height: 400,
    width: 800
  }
}
