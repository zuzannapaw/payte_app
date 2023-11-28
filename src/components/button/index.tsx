import { ButtonProps } from "./types";
import { FC } from "react";

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
