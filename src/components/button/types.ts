type ButtonProps = {
  /**
   * The label of the button; if not specified, label will be "Buy" or "Sell", according to the theme.
   */
  label?: string;
  /**
   * The theme that determines colors of the button
   */
  theme: "light" | "dark";
};

export { type ButtonProps };
