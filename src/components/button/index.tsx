export const Button = (props) => {
  return (
    <button
      className={ `button ${props.theme === "light" ? "button-light" : "button-dark"}`}
    >
      {props.theme === "light" ? "Sell" : "Buy"}
    </button>
  );
};
