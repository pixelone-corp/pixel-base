import styled, { css } from "styled-components";
import PixelIcon from "../pixel-button-icon/pixel-icon";
import React, { useContext } from "react";
import { $primaryColor } from "../styleGuide";
import { faCross, faTShirt, faXmark } from "@fortawesome/free-solid-svg-icons";
import PixelText from "../pixel-text/pixel-text";
import { PixelFactoryContext } from "../pixel-factory/pixel-factory";
/* eslint-disable-next-line */
export interface PixelBannerProps {
  label: React.ReactNode | string
  type: 'info' | 'warning' | 'error' | 'primary'
  isDismissible: boolean
  icon: string | any
  dismissAfter?: number
  onDismiss?: () => void
}

const StyledPixelBanner = styled.div<{ isShow: boolean, color: string }>`
  display: ${(props) => (props.isShow ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  > div {
    > ${PixelText} {
      color : ${(props) => props.color};
    }
  }
  ${(props: PixelBannerProps) =>
    props.type === "warning" &&
    css`
      background-color: #fff3cd;;
      color: #000 ;
      outline: none;
    `}
    ${(props: PixelBannerProps) =>
    props.type === "info" &&
    css`
      background-color: #cce5ff;
      color: #000 ;
      outline: none;
    `}
    ${(props: PixelBannerProps) =>
    props.type === "error" &&
    css`
      background-color: #f8d7da;
      color: #000 ;
      outline: none;
    `}
    ${(props: PixelBannerProps) =>
    props.type === "primary" &&
    css`
      background-color: ${$primaryColor};
      color: #000 ;
      outline: none;
    `}
`;


export const PixelBanner = React.forwardRef<
  HTMLButtonElement,
  PixelBannerProps>
  ((props, ref) => {
    const {
      label = <PixelText>Testing</PixelText>,
      type = 'primary',
      isDismissible = false,
      icon = faTShirt,
      dismissAfter,
      onDismiss,
      ...rest
    } = props;
    const { bannerInfo } = useContext(PixelFactoryContext);
    const [isShow, setIsShow] = React.useState(true);
    const [colorScheme, setColorScheme] = React.useState($primaryColor);
    React.useEffect(() => {
      switch (type) {
        case 'primary':
          setColorScheme('black');
          break;
        case 'warning':
          setColorScheme('#856404');
          break;
        case 'info':
          setColorScheme('#004085');
          break;
        case 'error':
          setColorScheme('#721c24');
          break;
        default:
          setColorScheme('black');
          break;
      }
    }, [type]);

    React.useEffect(() => {
      console.log(bannerInfo);
    }, [bannerInfo]);
    React.useEffect(() => {
      if (dismissAfter > 0) {
        setTimeout(() => {
          setIsShow(false);
          onDismiss && onDismiss();
        }, dismissAfter);
      }
    }, [dismissAfter]);


    return (
      <StyledPixelBanner color={colorScheme} isShow={isDismissible ? isShow : true} type={type}>
        <div><PixelIcon icon={icon} color={colorScheme} /> &nbsp; {label}</div>
        {isDismissible && <PixelIcon icon={faXmark} fontSize={"20px"} color={colorScheme} onClick={() => setIsShow(false)} />}
      </StyledPixelBanner>
    )
  })

export default PixelBanner;