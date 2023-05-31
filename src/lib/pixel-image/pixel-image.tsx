import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import dummyImage from './dummyImage.svg'

export interface PixelImageProps {
  src?: string
  alt?: string
  width?: string
  height?: string
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | string
  padding?: string
  backgroundColor?: string
  borderRadius?: string
  boxShadow?: string
  style?: React.CSSProperties
  hoverStyle?: React.CSSProperties
}
export const PixelImage = React.forwardRef<HTMLDivElement, PixelImageProps>(
  (
    {
      src,
      alt = 'Image not available',
      width,
      height,
      objectFit,
      padding,
      backgroundColor,
      borderRadius,
      boxShadow,
      style,
      hoverStyle,
      ...rest
    },
    ref
  ) => {
    return (
      <ImageContainer hoverStyle={hoverStyle} style={style}>
        {src || src === null ? (
          <ImageElement
            src={src}
            alt={alt}
            width={width}
            height={height}
            objectFit={objectFit}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            boxShadow={boxShadow}
            padding={padding}
          />
        ) : (
          <DummyImage
            src={dummyImage}
            alt={alt}
            width={width}
            height={height}
            objectFit={objectFit}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            boxShadow={boxShadow}
            padding={padding}
          />
        )}
      </ImageContainer>
    )
  }
)

const ImageContainer = styled.div<
  Pick<PixelImageProps, 'hoverStyle' | 'style'>
  >`
  ${(props) => props.hoverStyle};
  ${(props) => props.style};
`

const ImageElement = styled.img<
  Pick<
    PixelImageProps,
    | 'objectFit'
    | 'width'
    | 'height'
    | 'backgroundColor'
    | 'borderRadius'
    | 'boxShadow'
    | 'padding'
  >
  >`
  object-fit: ${(props) => props.objectFit};
  width: ${(props) => props.width ?? 'auto'};
  height: ${(props) => props.height ?? 'auto'};
  background-color: ${(props) => props.backgroundColor ?? 'transparent'};
  border-radius: ${(props) => props.borderRadius ?? '0'};
  box-shadow: ${(props) => props.boxShadow ?? 'none'};
  padding: ${(props) => props.padding ?? '0'};
`

const DummyImage = styled.img<
  Pick<
    PixelImageProps,
    | 'objectFit'
    | 'width'
    | 'height'
    | 'backgroundColor'
    | 'borderRadius'
    | 'boxShadow'
    | 'padding'
  >
  >`
  object-fit: ${(props) => props.objectFit};
  width: ${(props) => props.width ?? 'auto'};
  height: ${(props) => props.height ?? 'auto'};
  background-color: ${(props) => props.backgroundColor ?? 'transparent'};
  border-radius: ${(props) => props.borderRadius ?? '0'};
  box-shadow: ${(props) => props.boxShadow ?? 'none'};
  padding: ${(props) => props.padding ?? '0'};
`
export default PixelImage
