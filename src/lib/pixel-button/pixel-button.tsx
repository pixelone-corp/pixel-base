import styled, { css } from "styled-components";
import React, { ButtonHTMLAttributes } from "react";
import { $primaryColor, $secondaryColor } from "../styleGuide";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

export interface PixelButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "outline" | "primary" | "secondary" | "link" | string;
  size?: "lg" | "sm";
  active?: boolean;
  disabled?: boolean;
  margin?: string;
  padding?: string;
  tooltip?: string;
  children?: React.ReactNode;
}

const StyledPixelButton = styled(Button)`
  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
  margin: ${(props: PixelButtonProps) => props.margin || "0px"};
  padding: ${(props: PixelButtonProps) => props.padding};

  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
  ${(props: PixelButtonProps) =>
    props.variant === "outline" &&
    css`
      background-color: transparent;
      border-color: ${$primaryColor} !important;
      color: ${$primaryColor} !important;
      outline: none;
      &:hover {
        background-color: #fbf5ff !important;
      }
    `}
  ${(props: PixelButtonProps) =>
    props.variant === "primary" &&
    css`
      background-color: ${$primaryColor} !important;
      border-color: ${$primaryColor} !important;
      color: #fff !important;
      &:hover,
      &:active,
      &:focus {
        background-color: ${$secondaryColor} !important;
        border-color: ${$secondaryColor} !important;
      }
    `}

    ${(props: PixelButtonProps) =>
    props.variant === "link" &&
    css`
      background-color: transparent;
      border-color: transparent;
      color: ${$primaryColor};
      padding: ${(props: PixelButtonProps) =>
        props.padding || "0.375rem 0.75rem"};
      &:hover,
      &:hover a,
      &:active,
      &:active a,
      &:focus,
      &:focus a {
        color: ${$secondaryColor} !important;
      }
      a {
        color: ${$primaryColor} !important;
      }
    `}
    ${(props: PixelButtonProps) =>
    props.active &&
    css`
      background-color: ${$secondaryColor} !important;
      border-color: ${$secondaryColor} !important;
    `}
`;

export const PixelButton = React.forwardRef<
  HTMLButtonElement,
  PixelButtonProps
>((props, ref) => {
  const {
    className,
    variant = "primary",
    children,
    active,
    disabled = false,
    margin = "0px",
    tooltip = false,
    ...rest
  } = props;

  return (
    <React.Fragment>
      {tooltip ? (
        <OverlayTrigger
          placement={"top"}
          overlay={<Tooltip id={`tooltip-${"top"}`}>{tooltip}</Tooltip>}
        >
          <StyledPixelButton
            aria-pressed={active}
            variant={variant}
            ref={ref}
            className={className}
            disabled={disabled}
            margin={margin}
            {...rest}
          >
            {children}
          </StyledPixelButton>
        </OverlayTrigger>
      ) : (
        <StyledPixelButton
          active={active}
          variant={variant}
          ref={ref}
          className={className}
          disabled={disabled}
          margin={margin}
          {...rest}
        >
          {children}
        </StyledPixelButton>
      )}
    </React.Fragment>
  );
});
export default PixelButton;
