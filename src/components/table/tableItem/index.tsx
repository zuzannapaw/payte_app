import { TableItemElement } from "../tableItemElement";
export const TableItem = (props) => {
  return (
    <div className="table-item">
      {props.itemData.map((data) => {
        return <TableItemElement label={data.label} content={data.content} />;
      })}

      <div>chart</div>
      <div className="buttons">
        <button> Sell </button>
        <button> Buy</button>
      </div>
    </div>
  );
};
