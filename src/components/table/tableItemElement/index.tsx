export const TableItemElement = (props) => {
  let content;

  if (props.label === "Price") {
    content = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "narrowSymbol",
    }).format(props.content);
    console.log(content, "DOLAR");
  } else if (props.label === "Change") {
    content = `${props.content > 0 ? "+" : ""}${props.content}%`;
  } else {
    content = props.content;
  }

  const changeColorClass =
    props.content > 0 ? "positive-change" : "negative-change";

  return (
    <div style={{ display: "flex", flexBasis: "25%" }}>
      {props.image && (
        <div className={`image-wrapper ${props.variantSmall && "small"}`}>
          <img src={props.image}></img>
        </div>
      )}

      <div
        className={`table-item-element ${props.variantSmall ? "small" : ""}`}
      >
        <p className="label">{props.label}</p>
        <p
          className={`content ${
            props.label === "Change" ? changeColorClass : ""
          }`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};
