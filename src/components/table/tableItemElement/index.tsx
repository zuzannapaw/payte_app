export const TableItemElement = (props) => {
  console.log(props);
  return (
    <div style={{ display: "flex" }}>
      {props.image && (
        <div
          className={`image-wrapper ${props.variantSmall && "small"}`}
        >
          <img src={props.image}></img>
        </div>
      )}

      <div className={`table-item-element ${props.variantSmall && "small"}`}>
        <p className="label">{props.label}</p>
        <p className="content">{props.content}</p>
      </div>
    </div>
  );
};
