import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import Chart from "../charts/DC-chart"

const meta: Meta<typeof Chart> = {
  title: "Components/Chart/Heatmap ",
  component: Chart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Chart>

// Sample data for heatmap
const heatmapData = {
  xAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  yAxis: [
    "12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am",
    "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"
  ],
  min: 0,
  max: 100,
  series: [
    // Generate some sample data
    ...Array.from({ length: 7 }, (_, dayIndex) => 
      Array.from({ length: 24 }, (_, hourIndex) => {
        // Business hours have higher values on weekdays
        let value = 0
        if (dayIndex < 5) { // Weekdays
          if (hourIndex >= 8 && hourIndex <= 17) { // 8am-5pm
            value = Math.floor(Math.random() * 80) + 20
          } else if (hourIndex >= 18 && hourIndex <= 21) { // 6pm-9pm
            value = Math.floor(Math.random() * 40) + 10
          } else {
            value = Math.floor(Math.random() * 10)
          }
        } else { // Weekends
          if (hourIndex >= 10 && hourIndex <= 20) { // 10am-8pm
            value = Math.floor(Math.random() * 60) + 10
          } else {
            value = Math.floor(Math.random() * 15)
          }
        }
        return [dayIndex, hourIndex, value]
      })
    ).flat(),\
  name: "Order Count",
}

// Default tooltip (modern style)
export const DefaultModernTooltip: Story = {
  args: {
    type: "heatmap",
    data: heatmapData,
    height: 500,
    width: 800,
  },
}

// Custom tooltip example 1 - Simple
export const SimpleCustomTooltip: Story = {
  args: {
    type: "heatmap",
    data: {
      ...heatmapData,
      customTooltip: (params: any) => {
        const value = params.data[2]
        const day = heatmapData.xAxis[params.data[0]]
        const hour = heatmapData.yAxis[params.data[1]]
        
        return `
          <div style="text-align: center;">
            <div style="font-weight: bold; font-size: 16px; margin-bottom: 5px;">${day}, ${hour}</div>
            <div style="font-size: 24px; color: #1a73e8;">${value}</div>
            <div style="font-size: 12px; color: #666;">orders</div>
          </div>
        `
      }
    },
    height: 500,
    width: 800,
  },
}

// Custom tooltip example 2 - Card style
export const CardStyleTooltip: Story = {
  args: {
    type: "heatmap",
    data: {
      ...heatmapData,
      customTooltip: (params: any) => {
        const value = params.data[2]
        const day = heatmapData.xAxis[params.data[0]]
        const hour = heatmapData.yAxis[params.data[1]]
        
        // Calculate activity level
        let activityLevel = 'Low'
        let activityEmoji = '🔵'
        if (value > 70) {
          activityLevel = 'High'
          activityEmoji = '🔴'
        } else if (value > 30) {
          activityLevel = 'Medium'
          activityEmoji = '🟠'
        }
        
        return `
          <div style="background: white; border-radius: 8px; box-shadow: 0 6px 16px rgba(0,0,0,0.1); padding: 0; overflow: hidden; width: 200px;">
            <div style="background: #f5f5f5; padding: 10px; border-bottom: 1px solid #eee;">
              <div style="font-weight: bold; font-size: 14px;">${day}, ${hour}</div>
            </div>
            <div style="padding: 15px;">
              <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <div style="font-size: 28px; font-weight: bold; margin-right: 10px;">${value}</div>
                <div style="color: #666; font-size: 12px;">orders</div>
              </div>
              <div style="display: flex; align-items: center;">
                <div style="margin-right: 8px;">${activityEmoji}</div>
                <div style="font-size: 13px;">${activityLevel} Activity</div>
              </div>
            </div>
          </div>
        `
      }
    },
    height: 500,
    width: 800,
  },
}

// Custom tooltip example 3 - Rich data visualization
export const RichDataTooltip: Story = {
  args: {
    type: "heatmap",
    data: {
      ...heatmapData,
      customTooltip: (params: any) => {
        const value = params.data[2]
        const day = heatmapData.xAxis[params.data[0]]
        const hour = heatmapData.yAxis[params.data[1]]
        
        // Calculate activity level and color
        let activityLevel = 'Low'
        let color = '#2196F3'
        
        if (value > 70) {
          activityLevel = 'High'
          color = '#F44336'
        } else if (value > 30) {
          activityLevel = 'Medium'
          color = '#FF9800'
        }
        
        // Calculate percentage of max
        const percentage = Math.round((value / heatmapData.max) * 100)
        
        // Generate a mini bar to visualize the percentage
        const barWidth = percentage + '%'
        
        return `
          <div style="background: linear-gradient(135deg, white 0%, rgba(${color.replace('#', '').match(/.{2}/g)?.map(c => Number.parseInt(c, 16)).join(',')}, 0.1) 100%); border-radius: 8px; padding: 12px; min-width: 220px;">
            <div style="font-weight: 600; margin-bottom: 10px; font-size: 15px; display: flex; justify-content: space-between; border-bottom: 1px solid rgba(0,0,0,0.05); padding-bottom: 8px;">
              <span>${day}, ${hour}</span>
              <span style="color: ${color};">${activityLevel}</span>
            </div>
            
            <div style="margin-bottom: 12px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                <span style="color: #666;">Orders:</span>
                <span style="font-weight: 600;">${value}</span>
              </div>
              
              <div style="height: 6px; background: #eee; border-radius: 3px; overflow: hidden; margin-top: 8px;">
                <div style="height: 100%; width: ${barWidth}; background: ${color};"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 11px; color: #666; margin-top: 4px;">
                <span>0</span>
                <span>${percentage}%</span>
                <span>100%</span>
              </div>
            </div>
            
            <div style="font-size: 12px; color: #666; padding-top: 8px; border-top: 1px dashed #eee;">
              <div>Time period: ${hour.includes('am') ? (Number.parseInt(hour) < 6 ? 'Night' : 'Morning') : (Number.parseInt(hour) < 6 ? 'Afternoon' : 'Evening')}</div>
              <div>Day type: ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day) ? 'Weekday' : 'Weekend'}</div>
            </div>
          </div>
        `
      },
      tooltipOptions: {
        enterable: true,
        confine: true
      }
    },
    height: 500,
    width: 800,
  },
}

