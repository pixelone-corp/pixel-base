import styled, { css } from "styled-components";
import PixelIcon from "../pixel-button-icon/pixel-icon";
import React from "react";
import { $primaryColor } from "../styleGuide";
import { faTShirt, faXmark } from "@fortawesome/free-solid-svg-icons";
import { PixelText } from "../pixel-text/pixel-text";
import { PixelFactoryContext } from "../pixel-factory/pixel-factory";
import PixelFlexBox from "../pixel-flex-box/pixel-flex-box";
export interface PixelBannerProps {
  label?: any
  type?: 'info' | 'warning' | 'error' | 'primary'
  isDismissible?: boolean
  icon?: string | any
  dismissAfter?: number
  onDismiss?: () => void
  isShowBanner?: boolean
}
const StyledPixelBanner = styled.div<{ isShow: boolean, bgColor: string, color: string, type: string }>`
display: ${(props) => (props.isShow ? "flex" : "none")};
align-items: center;
justify-content: space-between;
width: 100%;
min-height: 30px;
padding: 0 10px;
position: fixed;
top: 0;
left: 0;
z-index: 230;
background-color: ${(props) => props.bgColor};
`;


export const PixelBanner = React.forwardRef<
  HTMLButtonElement,
  PixelBannerProps>
  ((props, ref) => {
    const {
      label = 'Pixel Banner',
      type,
      isDismissible = false,
      icon,
      dismissAfter,
      onDismiss,
      isShowBanner,
      ...rest
    } = props;
    const { bannerInfo } = React.useContext(PixelFactoryContext)
    const [properties, setProperties] = React.useState<PixelBannerProps>({});
    const [isShow, setIsShow] = React.useState(true);
    const [colorScheme, setColorScheme] = React.useState({
      color: '',
      bgColor: ''
    });
    React.useEffect(() => {
      switch (properties.type) {
        case 'primary':
          setColorScheme({
            color: 'black',
            bgColor: $primaryColor
          });
          break;
        case 'warning':
          setColorScheme({
            color: '#856404',
            bgColor: '#fff3cd'
          });
          break;
        case 'info':
          setColorScheme({
            color: '#004085',
            bgColor: '#cce5ff'
          });
          break;
        case 'error':
          setColorScheme({
            color: '#721c24',
            bgColor: '#f8d7da'
          });
          break;
        default:
          setColorScheme({
            color: colorScheme.color,
            bgColor: colorScheme.bgColor,
          });
          break;
      }
    }, [properties.type]);

    React.useEffect(() => {
      if (bannerInfo && bannerInfo != properties) {
        setProperties({
          label: bannerInfo.label,
          type: bannerInfo.type,
          isDismissible: bannerInfo.isDismissible,
          icon: bannerInfo.icon,
          dismissAfter: bannerInfo.dismissAfter,
          onDismiss: bannerInfo.onDismiss,
          isShowBanner: bannerInfo.isShowBanner
        })
        setIsShow(bannerInfo.isShowBanner);
      } else {
        setIsShow(false);
      }
    }, [bannerInfo]);
    React.useEffect(() => {
      if (properties.dismissAfter > 0) {
        setTimeout(() => {
          setIsShow(false);
          properties.onDismiss && properties.onDismiss();
        }, properties.dismissAfter);
      }
    }, [properties.dismissAfter]);


    return (
      <React.Fragment>
        <StyledPixelBanner color={colorScheme.color} bgColor={colorScheme.bgColor} isShow={isShow} type={properties.type}>
          <PixelFlexBox alignContent="center" alignItems="flex-start" justifyContent="flex-start">
            <PixelIcon padding="5px 0px 0px 0px" icon={properties.icon} color={colorScheme.color} /> &nbsp;
            <PixelText multiLine customColor={colorScheme.color}>{properties.label}</PixelText>
          </PixelFlexBox>
          {properties.isDismissible && <PixelIcon style={{ alignSelf: "flex-start" }} padding={"4px 0px 0px 0px"} icon={faXmark} fontSize={"20px"} color={colorScheme.color} onClick={() => setIsShow(false)} />}
        </StyledPixelBanner>
      </React.Fragment>
    )
  })

export default PixelBanner;