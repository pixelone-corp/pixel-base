import styled, { css } from "styled-components";
import PixelIcon from "../pixel-button-icon/pixel-icon";
import React from "react";
import { $primaryColor } from "../styleGuide";
import { faTShirt, faXmark } from "@fortawesome/free-solid-svg-icons";
import PixelText from "../pixel-text/pixel-text";
import { PixelFactoryContext } from "../pixel-factory/pixel-factory";
import PixelFlexBox from "../pixel-flex-box/pixel-flex-box";
/* eslint-disable-next-line */
export interface PixelBannerProps {
  label: any
  type: 'info' | 'warning' | 'error' | 'primary'
  isDismissible: boolean
  icon: string | any
  dismissAfter: number
  onDismiss?: () => void
}

const StyledPixelBanner = styled.div<{ isShow: boolean, color: string, type: string }>`
  display: ${(props) => (props.isShow ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 230;
  > div {
    > ${PixelText} {
      color : ${(props) => props.color};
    }
  }
  ${(props) =>
    props.type === "warning" &&
    css`
      background-color: #fff3cd;;
      color: #000 ;
      outline: none;
    `}
    ${(props) =>
    props.type === "info" &&
    css`
      background-color: #cce5ff;
      color: #000 ;
      outline: none;
    `}
    ${(props) =>
    props.type === "error" &&
    css`
      background-color: #f8d7da;
      color: #000 ;
      outline: none;
    `}
    ${(props) =>
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
    const [properties, setProperties] = React.useState<PixelBannerProps>({
      label: <PixelText>Testing</PixelText>,
      type: 'primary',
      isDismissible: false,
      icon: faTShirt,
      dismissAfter: 0,
      onDismiss: () => { },
    });
    const { showPixelBanner, bannerInfo } = React.useContext(PixelFactoryContext)

    React.useEffect(() => {
      setProperties({
        label: label,
        type: type,
        isDismissible: isDismissible,
        icon: icon,
        dismissAfter: dismissAfter,
        onDismiss: onDismiss
      })
      showPixelBanner && showPixelBanner({
        label: label,
        type: type,
        isDismissible: isDismissible,
        icon: icon,
        dismissAfter: dismissAfter,
        onDismiss: onDismiss
      })
    }, [label, type, isDismissible, icon, dismissAfter, onDismiss])

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
      if (bannerInfo) {
        setProperties({
          label: bannerInfo.label,
          type: bannerInfo.type,
          isDismissible: bannerInfo.isDismissible,
          icon: bannerInfo.icon,
          dismissAfter: bannerInfo.dismissAfter,
          onDismiss: bannerInfo.onDismiss
        })
      }

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
      <StyledPixelBanner color={colorScheme} isShow={isDismissible ? isShow : true} type={properties.type}>
        <PixelFlexBox alignContent="center" alignItems="center" justifyContent="flex-start"><PixelIcon icon={properties.icon} color={colorScheme} /> &nbsp; <span>{properties.label}</span></PixelFlexBox>
        {properties.isDismissible && <PixelIcon icon={faXmark} fontSize={"20px"} color={colorScheme} onClick={() => setIsShow(false)} />}
      </StyledPixelBanner>
    )
  })

export default PixelBanner;