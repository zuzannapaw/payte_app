type Options = {
  name: string;
}[];

type ThreeDotsDropdownProps = {
  /**
   * The label of the button; if not specified, label will be "Buy" or "Sell", according to the theme.
   */
  options: Options;
  dropdownPosition: "top" | "bottom";
};

export { type ThreeDotsDropdownProps };
