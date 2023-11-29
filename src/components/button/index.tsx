import { ButtonProps } from "./types";
import { FC } from "react";

/**
 * @name Button
 * @description A Button component
 * @param {ButtonProps} props The props of the component
 * @returns {JSX.Element} The JSX element
 * @example
 * <Button label="Button Label" theme="light"/>
 */

export const Button: FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  let label;
  if (props.label) {
    label = props.label;
  } else {
    label = props.theme === "light" ? "Sell" : "Buy";
  }
  return (
    <button
      className={`button ${
        props.theme === "light" ? "button-light" : "button-dark"
      }`}
    >
      {label}
    </button>
  );
};
