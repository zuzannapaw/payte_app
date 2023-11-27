export const Button = (props) => {
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
