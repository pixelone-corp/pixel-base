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
            type: 'category' as const,
            data: data.xAxis || []
          },
          yAxis: {
            type: 'value' as const
          },
          series:
            data.series?.map((series: any) => ({
              name: series.name,
              type: 'line',
              data: series.data,
              showSymbol: series.showSymbol || false,
              ...(series.itemStyle && { itemStyle: series.itemStyle }),
              ...(series.lineStyle && { lineStyle: series.lineStyle })
            })) || []
        }

      case 'area':
        return {
          ...baseOptions,
          xAxis: {
            type: 'category' as const,
            boundaryGap: false,
            data: data.xAxis || []
          },
          yAxis: {
            type: 'value' as const
          },
          series:
            data.series?.map((series: any) => ({
              name: series.name,
              type: 'line',
              areaStyle: {},
              showSymbol: series.showSymbol || false,
              data: series.data,
              ...(series.itemStyle && { itemStyle: series.itemStyle }),
              ...(series.areaStyle && { areaStyle: series.areaStyle })
            })) || []
        }

      case 'bar':
        return {
          ...baseOptions,
          xAxis: {
            type: 'category' as const,
            data: data.xAxis || []
          },
          yAxis: {
            type: 'value' as const
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
            type: 'category' as const,
            data: data.xAxis || []
          },
          yAxis: {
            type: 'value' as const
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
                  type: 'value' as const,
                  name: data.yAxisNames?.[0] || '',
                  ...(data.yAxisOptions?.[0] || {})
                },
                {
                  type: 'value' as const,
                  name: data.yAxisNames?.[1] || '',
                  ...(data.yAxisOptions?.[1] || {})
                }
              ]
            : {
                type: 'value' as const
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
            type: 'value' as const
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
            position: 'top',
            trigger: 'item',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: 'rgba(0, 0, 0, 0.1)',
            borderWidth: 1,
            extraCssText:
              'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 12px 16px; backdrop-filter: blur(4px);',
            textStyle: {
              color: '#333',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 14
            },
            formatter:
              data.customTooltip ||
              ((params) => {
                const value = params.data[2]
                const day = data.xAxis[params.data[0]]
                const hour = data.yAxis[params.data[1]]

                // Calculate activity level
                let activityLevel = 'Low'
                const percentage = (value / data.max) * 100
                if (percentage > 70) activityLevel = 'High'
                else if (percentage > 30) activityLevel = 'Medium'

                // Choose color based on activity level
                let activityColor = '#4CAF50' // Green for high
                if (activityLevel === 'Medium') activityColor = '#FF9800' // Orange for medium
                if (activityLevel === 'Low') activityColor = '#2196F3' // Blue for low

                return `
                  <div style="font-weight: 600; margin-bottom: 8px; font-size: 15px; display: flex; align-items: center; gap: 6px;">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: ${activityColor};"></span>
                    ${day}, ${hour}
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                    <span style="color: #666;">Value:</span>
                    <span style="font-weight: 600;">${value}</span>
                  </div>
                  <div style="display: flex; justify-content: space-between;">
                    <span style="color: #666;">Activity:</span>
                    <span style="font-weight: 500; color: ${activityColor};">${activityLevel}</span>
                  </div>
                `
              }),
            ...data.tooltipOptions
          },
          xAxis: {
            type: 'category' as const,
            data: data.xAxis || [],
            splitArea: {
              show: true
            }
          },
          yAxis: {
            type: 'category' as const,
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
                show: data.showLabel || true
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
      // @ts-ignore
      option={chartOptions}
      style={{ height, width }}
      className={className}
      opts={{ renderer: 'canvas' }}
    />
  )
}

export default Chart
