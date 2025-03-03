import React, { useRef, useState } from 'react'
import Heatmap from '../HeatMapGrid/index'
import { Clock, Package } from 'lucide-react'
import './globals.css'

import { Calendar } from 'lucide-react'

const DcHeatMap = ({
  data,
  xLabels,
  yLabels,
  cellStyle,

  tooltipTitle = 'Order Details',
  tooltipValueLabel = 'Orders',
  tooltipDayLabel = 'Day',
  tooltipTimeLabel = 'Time',
  className = '',
  cellSize = 40,
  showValues = true,
  colorScale
}) => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: '',
    value: 0,
    xLabels: '',
    yLabels: '',
    x: 0,
    y: 0
  })

  const handleMouseEnter = (value, x, y, event) => {
    setTooltip({
      visible: true,
      content: `Value: ${value}\nX: ${xLabels[x]}\nY: ${yLabels[y]}`,
      value: value,
      xLabels: xLabels[x],
      yLabels: yLabels[y],
      x: event.clientX,
      y: event.clientY
    })
  }

  const handleMouseLeave = () => {
    setTooltip({
      visible: false,
      content: '',
      value: 0,
      xLabels: '',
      yLabels: '',
      x: 0,
      y: 0
    })
  }
  const arrowRef = useRef(null)
  const tooltipRef = useRef(null)

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <Heatmap
        xLabels={xLabels}
        yLabels={yLabels}
        data={data}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgba(66, 86, 244, ${1 - (max - value) / (max - min)})`,
          fontSize: '11px',
          color: '#444',
          ...cellStyle
        })}
        cellRender={(value) => {
          // Manually calculate x and y indices
          let x, y
          for (let i = 0; i < data.length; i++) {
            const row = data[i]
            const colIndex = row.indexOf(value)
            if (colIndex !== -1) {
              x = colIndex
              y = i
              break
            }
          }

          return (
            <div
              onMouseEnter={(e) => handleMouseEnter(value, x, y, e)}
              onMouseLeave={handleMouseLeave}
            >
              {value}
            </div>
          )
        }}
      />
      {tooltip.visible && (
        <div
          ref={tooltipRef}
          className='z-50 animate-fadeIn'
          style={{
            position: 'absolute',
            top: tooltip.y,
            left: tooltip.x
          }}
          role='tooltip'
          aria-live='polite'
        >
          {/* Tooltip pointer */}
          <div
            ref={arrowRef}
            className='absolute w-3 h-3 bg-white rotate-45 transform'
            style={{
              top: 0,
              left: 0,
              right: '',
              bottom: '',
              boxShadow: '-2px -2px 5px rgba(0, 0, 0, 0.03)'
            }}
          />

          {/* Main tooltip container */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden w-64 border border-gray-100'>
            {/* Header */}
            <div className='bg-primary/10 px-4 py-2 border-b border-gray-100'>
              <h3 className='font-semibold text-primary'>{tooltipTitle}</h3>
            </div>

            {/* Content */}
            <div className='p-4 space-y-3'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 text-gray-700'>
                  <Package size={18} className='text-primary' />
                  <span className='font-medium'>{tooltipValueLabel}</span>
                </div>
                <span className='font-bold text-lg text-primary'>
                  {tooltip.value}
                </span>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 text-gray-700'>
                  <Calendar size={18} className='text-primary' />
                  <span className='font-medium'>{tooltipDayLabel}</span>
                </div>
                <span className='text-gray-600'>{tooltip.xLabels}</span>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 text-gray-700'>
                  <Clock size={18} className='text-primary' />
                  <span className='font-medium'>{tooltipTimeLabel}</span>
                </div>
                <span className='text-gray-600'>{tooltip.yLabels}</span>
              </div>
            </div>

            {/* Footer with subtle gradient */}
            <div className='h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/60' />
          </div>
        </div>
      )}
    </div>
  )
}
export default DcHeatMap
