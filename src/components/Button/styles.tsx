import styled from "styled-components";

const colors = {
  text: {
    black: "#3F3F3F",
    white: "#FFF",
    blue: "#3D5AFE",
    disabled: "hsl(219, 15%, 82%)", // --colors-neutral-300
    /* Neutral */
    neutral950: "hsl(222, 32%, 8%)", // --colors-neutral-950
    neutral900: "hsl(230, 19%, 12%)", // --colors-neutral-900
    neutral800: "hsl(231, 16%, 16%)", // --colors-neutral-800
    neutral700: "hsl(221, 16%, 20%)", // --colors-neutral-700
    neutral600: "hsl(222, 11%, 36%)", // --colors-neutral-600
    neutral500: "hsl(221, 8%, 48%)", // --colors-neutral-500
    neutral400: "hsl(220, 11%, 64%)", // --colors-neutral-400
    neutral300: "hsl(219, 15%, 82%)", // --colors-neutral-300
    neutral200: "hsl(216, 19%, 90%)", // --colors-neutral-200
    neutral100: "hsl(216, 26%, 96%)", // --colors-neutral-100
    neutral50: "hsl(216, 33%, 97%)", // --colors-neutral-50
    neutral0: "hsl(0, 0%, 100%)", // --colors-neutral-0

    /* Blue */
    blue700: " hsl(228, 70%, 48%)", // --colors-blue-700
    blue500: "hsl(228, 100%, 60%)", // --colors-blue-500
    blue50: "hsl(222, 100%, 96%)", // --colors-blue-50

    /* Green */
    green500: "hsl(148, 71%, 44%)", // --colors-green-500
    green100: "hsl(154, 84%, 90%)", // --colors-green-100

    /* Red */
    red500: "hsl(355, 96%, 60%)", // --colors-red-500
    red100: "hsl(356, 100%, 92%)", // --colors-red-100
  },
  backgrounds: {
    default: ["hsl(216, 33%, 97%)", "hsl(216, 33%, 97%)"], // --colors-neutral-50 / --colors-neutral-50
    primary: ["hsl(228, 100%, 60%)", "hsl(228, 70%, 48%)"], // --colors-blue-500 / --colors-blue-700
    secondary: ["hsl(216, 26%, 96%)", "#ffffff"], // --colors-neutral-100 / white
    danger: ["#D32F2F", "#9A0007"],
    outline: ["hsl(219, 15%, 82%)", "hsl(216, 26%, 96%)"], // --colors-neutral-300 / --colors-neutral-100

    neutral950: "hsl(222, 32%, 8%)", // --colors-neutral-950
    neutral900: "hsl(230, 19%, 12%)", // --colors-neutral-900
    neutral800: "hsl(231, 16%, 16%)", // --colors-neutral-800
    neutral700: "hsl(221, 16%, 20%)", // --colors-neutral-700
    neutral600: "hsl(222, 11%, 36%)", // --colors-neutral-600
    neutral500: "hsl(221, 8%, 48%)", // --colors-neutral-500
    neutral400: "hsl(220, 11%, 64%)", // --colors-neutral-400
    neutral300: "hsl(219, 15%, 82%)", // --colors-neutral-300
    neutral200: "hsl(216, 19%, 90%)", // --colors-neutral-200
    neutral100: "hsl(216, 26%, 96%)", // --colors-neutral-100
    neutral50: "hsl(216, 33%, 97%)", // --colors-neutral-50
    neutral0: "hsl(0, 0%, 100%)", // --colors-neutral-0

    /* Blue */
    blue700: " hsl(228, 70%, 48%)", // --colors-blue-700
    blue500: "hsl(228, 100%, 60%)", // --colors-blue-500
    blue50: "hsl(222, 100%, 96%)", // --colors-blue-50

    /* Green */
    green500: "hsl(148, 71%, 44%)", // --colors-green-500
    green100: "hsl(154, 84%, 90%)", // --colors-green-100

    /* Red */
    red500: "hsl(355, 96%, 60%)", // --colors-red-500
    red100: "hsl(356, 100%, 92%)", // --colors-red-100
  },
};
const shadow = ["none", "0px 2px 3px rgba(51, 51, 51, 0.2)"];
const sizes = {
  sm: "6px 12px",
  md: "8px 16px",
  lg: "11px 22px",
};

type StyledButtonProps = {
  $size?: keyof typeof sizes;
  $disableShadow?: boolean;
  $variant?: "default" | "outline" | "text";
  $color?: keyof (typeof colors)["backgrounds"];
};

const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 6px;
  padding: ${(props) => props.$size && sizes[props.$size]};
  box-shadow: ${(props) => (props.$disableShadow ? shadow[0] : shadow[1])};
  border: ${(props) =>
    props.$variant === "outline"
      ? `1px solid ${colors.text.neutral300}`
      : "none"};
  font-family: "Noto Sans JP";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  background: none;
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 0;
  cursor: pointer;
  color: ${colors.text.black};
  background: ${colors.backgrounds.default[0]};

  ${(props) => {
    if (props.$color)
      return `
      background: ${colors.backgrounds[props.$color][0]};
      color: ${
        props.$color === "default" ? colors.text.black : colors.text.white
      };
    `;
  }}

  ${(props) => {
    if (props.$variant === "default")
      return `background: ${colors.backgrounds.default};`;
    if (props.$variant === "outline")
      return `background: none; color: ${colors.text.neutral300};`;
    if (props.$variant === "text")
      return `background: none; box-shadow: none;  color: ${colors.text.neutral300};`;
  }}

  &:hover {
    background-color: ${(props) => {
      if (props.$variant === "default") return colors.backgrounds.default[1];
      if (props.$variant === "outline") return colors.backgrounds.outline[1];
      if (props.$variant === "text") return colors.backgrounds.outline[1];

      if (props.$color) return colors.backgrounds[props.$color][1];
      return colors.backgrounds.default[1];
    }};
  }

  &:disabled {
    color: ${colors.text.disabled};
    background-color: ${colors.backgrounds.default[0]};
    ${(props) => (props.$variant === "text" ? "background: none;" : undefined)}
    cursor: unset;
    box-shadow: none;
  }
`;

export default StyledButton;
