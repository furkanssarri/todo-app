import React, { useEffect, useState } from "react";
import StyledButton from "./styles.tsx";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  HomeIconDefault,
  ShoppingCartIcon,
  ThumbsUpIcon,
} from "./icons.tsx";

import {
  IconPlus,
  IconDelete,
  IconArchive,
  IconArrowLeft,
  IconRestore,
  IconTag,
  IconSearch,
  IconSettings,
  IconHome,
} from "../icons/index";
import "./button.css";

const icons = {
  home_default: <HomeIconDefault aria-hidden="true" focusable="false" />,
  local_grocery_store: (
    <ShoppingCartIcon aria-hidden="true" focusable="false" />
  ),
  arrow_left: <ArrowLeftIcon aria-hidden="true" focusable="false" />,
  arrow_right: <ArrowRightIcon aria-hidden="true" focusable="false" />,
  thumbs_up: <ThumbsUpIcon aria-hidden="true" focusable="false" />,
  // Additional icons
  home: <IconHome aria-hidden="true" focusable="false" />,
  search: <IconSearch aria-hidden="true" focusable="false" />,
  archive: <IconArchive aria-hidden="true" focusable="false" />,
  settings: <IconSettings aria-hidden="true" focusable="false" />,
  delete: <IconDelete aria-hidden="true" focusable="false" />,
  plus: <IconPlus aria-hidden="true" focusable="false" />,
  refresh: <IconRestore aria-hidden="true" focusable="false" />,
  tag: <IconTag aria-hidden="true" focusable="false" />,

  arrowLeft: <IconArrowLeft aria-hidden="true" focusable="false" />,
};

type IconName = keyof typeof icons;

type ButtonProps = {
  variant?: "default" | "outline" | "text";
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: IconName | React.ReactElement;
  endIcon?: IconName | React.ReactElement;
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "danger";
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
  title,
  onClick,
  ...rest
}: ButtonProps) => {
  const [startIcon_, setStartIcon] = useState<React.ReactElement | null>(null);
  const [endIcon_, setEndIcon] = useState<React.ReactElement | null>(null);

  useEffect(() => {
    if (startIcon) {
      if (typeof startIcon === "string") {
        if (Object.keys(icons).includes(startIcon)) {
          setStartIcon(icons[startIcon]);
        }
      } else if (React.isValidElement(startIcon)) {
        setStartIcon(startIcon);
      }
    }
    if (endIcon) {
      if (typeof endIcon === "string") {
        if (Object.keys(icons).includes(endIcon)) {
          setEndIcon(icons[endIcon]);
        }
      } else if (React.isValidElement(endIcon)) {
        setEndIcon(endIcon);
      }
    }
  }, [startIcon, endIcon]);

  return (
    <StyledButton
      type={rest.type || "button"}
      $variant={variant}
      $disableShadow={disableShadow}
      $size={size}
      $color={color}
      disabled={disabled}
      onClick={onClick}
      title={title}
      aria-label={rest["aria-label"]}
      {...rest}
    >
      {startIcon_}
      {rest.children}
      {endIcon_}
    </StyledButton>
  );
};

export default Button;
