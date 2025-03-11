'use client'

import React from 'react'
import { useMemo } from 'react'
import ReactECharts from 'echarts-for-react'
import type { EChartsOption } from 'echarts'

export type ChartType =
  | 'line'
  | 'area'
  | 'bar'
  | 'pie'
  | 'heatmap'
  | 'horizontalBar'
  | 'stackedBar'
  | 'mixedLineBar'

export interface DcChartProps {
  type: ChartType
  data: any
  height?: string | number
  width?: string | number
  className?: string
  options?: EChartsOption
}

export const Chart: React.FC<DcChartProps> = ({
  type,
  data,
  height = '400px',
  width = '100%',
  className = '',
  options = {}
}) => {
  const chartOptions = useMemo(() => {
    const baseOptions: EChartsOption = {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      ...options
    }

    switch (type) {
      case 'line':
        return {
          ...baseOptions,
          xAxis: {
            type: 'category',
            data: data.xAxis || []
          },
          yAxis: {
            type: 'value'
          },
          series:
            data.series?.map((series: any) => ({
              name: series.name,
              type: 'line',
              data: series.data,
              ...(series.itemStyle && { itemStyle: series.itemStyle }),
              ...(series.lineStyle && { lineStyle: series.lineStyle })
            })) || []
        }

      case 'area':
        return {
          ...baseOptions,
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data.xAxis || []
          },
          yAxis: {
            type: 'value'
          },
          series:
            data.series?.map((series: any) => ({
              name: series.name,
              type: 'line',
              areaStyle: {},
              data: series.data,
              ...(series.itemStyle && { itemStyle: series.itemStyle }),
              ...(series.areaStyle && { areaStyle: series.areaStyle })
            })) || []
        }

      case 'bar':
        return {
          ...baseOptions,
          xAxis: {
            type: 'category',
            data: data.xAxis || []
          },
          yAxis: {
            type: 'value'
          },
          series:
            data.series?.map((series: any) => ({
              name: series.name,
              type: 'bar',
              data: series.data,
              ...(series.itemStyle && { itemStyle: series.itemStyle })
            })) || []
        }

      case 'stackedBar':
        return {
          ...baseOptions,
          xAxis: {
            type: 'category',
            data: data.xAxis || []
          },
          yAxis: {
            type: 'value'
          },
          series:
            data.series?.map((series: any) => ({
              name: series.name,
              type: 'bar',
              stack: data.stackName || 'total',
              emphasis: {
                focus: 'series'
              },
              data: series.data,
              ...(series.itemStyle && { itemStyle: series.itemStyle }),
              ...(series.label && { label: series.label })
            })) || []
        }

      case 'mixedLineBar':
        return {
          ...baseOptions,
          legend: {
            ...(baseOptions.legend || {})
          },
          xAxis: {
            type: 'category',
            data: data.xAxis || []
          },
          yAxis: data.dualYAxis
            ? [
                {
                  type: 'value',
                  name: data.yAxisNames?.[0] || '',
                  ...(data.yAxisOptions?.[0] || {})
                },
                {
                  type: 'value',
                  name: data.yAxisNames?.[1] || '',
                  ...(data.yAxisOptions?.[1] || {})
                }
              ]
            : {
                type: 'value'
              },
          series:
            data.series?.map((series: any) => ({
              name: series.name,
              type: series.type || 'bar',
              ...(series.yAxisIndex !== undefined && {
                yAxisIndex: series.yAxisIndex
              }),
              data: series.data,
              ...(series.itemStyle && { itemStyle: series.itemStyle }),
              ...(series.lineStyle && { lineStyle: series.lineStyle }),
              ...(series.symbolSize !== undefined && {
                symbolSize: series.symbolSize
              }),
              ...(series.smooth !== undefined && { smooth: series.smooth })
            })) || []
        }

      case 'horizontalBar':
        return {
          ...baseOptions,
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            data: data.yAxis || []
          },
          series:
            data.series?.map((series: any) => ({
              name: series.name,
              type: 'bar',
              data: series.data,
              ...(series.itemStyle && { itemStyle: series.itemStyle })
            })) || []
        }

      case 'pie':
        return {
          ...baseOptions,
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          series: [
            {
              name: data.name || 'Data',
              type: 'pie',
              radius: data.radius || '50%',
              center: data.center || ['50%', '50%'],
              data: data.series || [],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              ...(data.itemStyle && { itemStyle: data.itemStyle }),
              ...(data.label && { label: data.label })
            }
          ]
        }

      case 'heatmap':
        return {
          ...baseOptions,
          tooltip: {
            position: 'top'
          },
          xAxis: {
            type: 'category',
            data: data.xAxis || [],
            splitArea: {
              show: true
            }
          },
          yAxis: {
            type: 'category',
            data: data.yAxis || [],
            splitArea: {
              show: true
            }
          },
          visualMap: {
            min: data.min || 0,
            max: data.max || 10,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%',
            ...data.visualMap
          },
          series: [
            {
              name: data.name || 'Heatmap',
              type: 'heatmap',
              data: data.series || [],
              label: {
                show: data.showLabel || false
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              ...(data.itemStyle && { itemStyle: data.itemStyle })
            }
          ]
        }

      default:
        return baseOptions
    }
  }, [type, data, options])

  return (
    <ReactECharts
      option={chartOptions}
      style={{ height, width }}
      className={className}
      opts={{ renderer: 'canvas' }}
    />
  )
}

export default Chart
