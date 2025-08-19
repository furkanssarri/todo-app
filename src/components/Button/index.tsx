import React, { useEffect, useState } from "react";
import StyledButton from "./styles.tsx";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  HomeIcon,
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
} from "../icons/index";
import "./button.css";

const icons = {
  local_grocery_store: <ShoppingCartIcon />,
  home: <HomeIcon />,
  arrow_left: <ArrowLeftIcon />,
  arrow_right: <ArrowRightIcon />,
  thumbs_up: <ThumbsUpIcon />,
  plus: <IconPlus />,
  delete: <IconDelete />,
  archive: <IconArchive />,
  refresh: <IconRestore />,
  arrowLeft: <IconArrowLeft />,
  tag: <IconTag />,
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
  onClick?: () => void;
  children?: React.ReactNode;
};

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
      $variant={variant}
      $disableShadow={disableShadow}
      $size={size}
      $color={color}
      disabled={disabled}
      onClick={onClick}
      title={title}
      {...rest}
    >
      {startIcon_}
      {rest.children}
      {endIcon_}
    </StyledButton>
  );
};

export default Button;
