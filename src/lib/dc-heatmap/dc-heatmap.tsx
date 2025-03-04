import React from 'react'
import { useRef, useState, useEffect } from 'react'
import Heatmap from '../HeatMapGrid/index'
import { Clock, Package, Calendar, ChevronRight } from 'lucide-react'
export interface MapProps {
  data: any
  xLabels: any
  yLabels: any
  cellStyle?: any
  tooltipTitle?: string
  tooltipValueLabel?: string
  tooltipDayLabel?: string
  tooltipTimeLabel?: string
}
export const DcHeatMap = React.forwardRef<HTMLDivElement, MapProps>(
  ({
    data,
    xLabels,
    yLabels,
    cellStyle,
    tooltipTitle = 'Order ',
    tooltipValueLabel = 'Orders',
    tooltipDayLabel = 'Day',
    tooltipTimeLabel = 'Time'
  }) => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      value: 0,
      xLabel: '',
      yLabel: '',
      x: 0,
      y: 0
    })

    const tooltipRef = useRef(null)

    // Update tooltip position to prevent it from going off-screen
    useEffect(() => {
      if (tooltip.visible && tooltipRef.current) {
        const tooltipEl = tooltipRef.current
        const rect = tooltipEl.getBoundingClientRect()
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight

        let newX = tooltip.x + 15 // Add offset to prevent tooltip from appearing under cursor
        let newY = tooltip.y + 15

        // Adjust if tooltip goes off right edge
        if (newX + rect.width > viewportWidth) {
          newX = tooltip.x - rect.width - 15
        }

        // Adjust if tooltip goes off bottom edge
        if (newY + rect.height > viewportHeight) {
          newY = tooltip.y - rect.height - 15
        }

        tooltipEl.style.left = `${newX}px`
        tooltipEl.style.top = `${newY}px`
      }
    }, [tooltip.visible, tooltip.x, tooltip.y])

    const handleMouseEnter = (value, x, y, event) => {
      setTooltip({
        visible: true,
        value: value,
        xLabel: x,
        //  >= 0 && x < xLabels.length ? xLabels[x] : 'Unknown',
        yLabel: y,
        // >= 0 && y < yLabels.length ? yLabels[y] : 'Unknown',
        x: event.clientX,
        y: event.clientY
      })
    }

    const handleMouseLeave = () => {
      setTooltip({
        visible: false,
        value: 0,
        xLabel: '',
        yLabel: '',
        x: 0,
        y: 0
      })
    }

    return (
      <div className='relative w-full overflow-x-auto'>
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
          cellRender={(value, x, y) => {
            return (
              <div
                onMouseEnter={(e) => handleMouseEnter(value, x, y, e)}
                onMouseLeave={handleMouseLeave}
                className='w-full h-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:opacity-80'
              >
                {value}
              </div>
            )
          }}
        />

        {tooltip.visible && (
          <div
            ref={tooltipRef}
            className='fancy-tooltip'
            role='tooltip'
            aria-live='polite'
          >
            <div className='tooltip-card'>
              <div className='tooltip-header'>
                <div className='tooltip-badge'>{tooltipTitle}</div>
                <div className='tooltip-value-badge'>{tooltip.value}</div>
              </div>

              <div className='tooltip-divider'></div>

              <div className='tooltip-body'>
                <div className='tooltip-row'>
                  <div className='tooltip-icon-container'>
                    <Package size={16} className='tooltip-icon' />
                  </div>
                  <div className='tooltip-text'>
                    <span className='tooltip-label'>{tooltipValueLabel}</span>
                    <span className='tooltip-value'>{tooltip.value}</span>
                  </div>
                  <ChevronRight size={14} className='tooltip-chevron' />
                </div>

                <div className='tooltip-row'>
                  <div className='tooltip-icon-container calendar'>
                    <Calendar size={16} className='tooltip-icon' />
                  </div>
                  <div className='tooltip-text'>
                    <span className='tooltip-label'>{tooltipDayLabel}</span>
                    <span className='tooltip-value'>{tooltip.xLabel}</span>
                  </div>
                  <ChevronRight size={14} className='tooltip-chevron' />
                </div>

                <div className='tooltip-row'>
                  <div className='tooltip-icon-container clock'>
                    <Clock size={16} className='tooltip-icon' />
                  </div>
                  <div className='tooltip-text'>
                    <span className='tooltip-label'>{tooltipTimeLabel}</span>
                    <span className='tooltip-value'>{tooltip.yLabel}</span>
                  </div>
                  <ChevronRight size={14} className='tooltip-chevron' />
                </div>
              </div>

              <div className='tooltip-footer'>
                <div className='tooltip-pulse'></div>
                <span>Live Data</span>
              </div>
            </div>
          </div>
        )}

        <style>{`
        .fancy-tooltip {
          position: fixed;
          z-index: 1000;
          filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.2));
          transform: translate3d(0, 0, 0);
          animation: tooltipEntrance 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          pointer-events: none;
        }

        @keyframes tooltipEntrance {
          0% { opacity: 0; transform: scale(0.8) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        .tooltip-card {
          width: 200px;
          height: 260px;
          background: linear-gradient(145deg, #ffffff, #f5f7ff);
          border-radius: 16px;
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06),
            0 0 0 1px rgba(66, 86, 244, 0.05),
            inset 0 2px 2px rgba(255, 255, 255, 0.5);
          overflow: hidden;
          position: relative;
        }

        .tooltip-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #4256f4, #8a94ff);
          z-index: 1;
        }

        .tooltip-header {
          padding: 10px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .tooltip-badge {
          background: linear-gradient(135deg, #4256f4, #5e6ef9);
          color: white;
          font-size: 12px;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 20px;
          box-shadow: 0 2px 5px rgba(66, 86, 244, 0.3);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .tooltip-value-badge {
          background: rgba(66, 86, 244, 0.1);
          color: #4256f4;
          font-size: 16px;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 12px;
          border: 1px solid rgba(66, 86, 244, 0.2);
        }

        .tooltip-divider {
          height: 1px;
          background: linear-gradient(to right, 
            rgba(229, 231, 235, 0), 
            rgba(229, 231, 235, 0.5), 
            rgba(229, 231, 235, 0));
          margin: 0 16px;
        }

        .tooltip-body {
          padding: 16px;
        }

        .tooltip-row {
          display: flex;
          align-items: center;
          padding: 5px;
          margin-bottom: 5px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.7);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          transition: all 0.2s ease;
          animation: rowSlideIn 0.4s ease-out forwards;
          opacity: 0;
          transform: translateX(-10px);
        }

        .tooltip-row:hover {
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .tooltip-row:nth-child(1) { animation-delay: 0.1s; }
        .tooltip-row:nth-child(2) { animation-delay: 0.2s; }
        .tooltip-row:nth-child(3) { animation-delay: 0.3s; }

        @keyframes rowSlideIn {
          0% { opacity: 0; transform: translateX(-10px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .tooltip-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: linear-gradient(135deg, #4256f4, #5e6ef9);
          color: white;
          margin-right: 12px;
          box-shadow: 0 2px 5px rgba(66, 86, 244, 0.3);
          flex-shrink: 0;
        }

        .tooltip-icon-container.calendar {
          background: linear-gradient(135deg, #f97316, #fb923c);
          box-shadow: 0 2px 5px rgba(249, 115, 22, 0.3);
        }

        .tooltip-icon-container.clock {
          background: linear-gradient(135deg, #06b6d4, #22d3ee);
          box-shadow: 0 2px 5px rgba(6, 182, 212, 0.3);
        }

        .tooltip-icon {
          filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
        }

        .tooltip-text {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .tooltip-label {
          font-size: 11px;
          color: #6B7280;
          margin-bottom: 2px;
        }

        .tooltip-value {
          font-weight: 600;
          color: #111827;
          font-size: 14px;
        }

        .tooltip-chevron {
          color: #9CA3AF;
          opacity: 0;
          transform: translateX(-5px);
          transition: all 0.2s ease;
        }

        .tooltip-row:hover .tooltip-chevron {
          opacity: 1;
          transform: translateX(0);
        }

        .tooltip-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          background: rgba(249, 250, 251, 0.7);
          font-size: 12px;
          color: #6B7280;
          border-top: 1px solid rgba(229, 231, 235, 0.5);
        }

        .tooltip-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #10B981;
          margin-right: 8px;
          position: relative;
        }

        .tooltip-pulse::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #10B981;
          animation: pulse 1.5s ease-out infinite;
          z-index: -1;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          70% { transform: scale(2.5); opacity: 0; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
      </div>
    )
  }
)

export default DcHeatMap
