import React, { useState } from 'react'
import Heatmap from '../src/index'

const HeatMap = ({ data, xLabels, yLabels, cellStyle }) => {
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

  console.log(tooltip.content)

  const handleMouseLeave = () => {
    setTooltip({ visible: false, content: '', x: 0, y: 0 })
  }

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
          style={{
            position: 'fixed',
            top: tooltip.y + 10,
            left: tooltip.x + 10,
            backgroundColor: '#e7f8ffd1',
            color: '#070707',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(163, 163, 163, 0.219)',
            // fontSize: '14px',
            fontWeight: '600',
            lineHeight: '1.5',
            whiteSpace: 'pre-line',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '130px',
            width: '150px',
            zIndex: 19999999999999000
          }}
        >
          {/* {tooltip.content} */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              gap: '20px'
            }}
          >
            <div
              style={{
                fontSize: '16px',
                width: '40%',
                color: '#201f1f',
                fontWeight: '600'
              }}
            >
              Orders
            </div>{' '}
            <div style={{ width: '30%', fontWeight: '400', color: '#525252' }}>
              {tooltip.value}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              gap: '20px'
            }}
          >
            {' '}
            <div
              style={{
                fontSize: '16px',
                width: '40%',
                color: '#201f1f',
                fontWeight: '600'
              }}
            >
              Day
            </div>{' '}
            <div style={{ width: '30%', fontWeight: '400', color: '#525252' }}>
              {tooltip.xLabels}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              gap: '20px'
            }}
          >
            <div
              style={{
                fontSize: '16px',
                width: '40%',
                color: '#201f1f',
                fontWeight: '600'
              }}
            >
              Time
            </div>{' '}
            <div style={{ width: '30%', fontWeight: '400', color: '#868585' }}>
              {tooltip.yLabels}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeatMap
