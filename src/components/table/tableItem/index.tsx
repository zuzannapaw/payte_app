import { TableItemElement } from "../tableItemElement";
import { Button } from "../../button";

export const TableItem = (props) => {
  return (
    <div className="table-item">
      {props.itemData.map((data) => {
        return <TableItemElement label={data.label} content={data.content} image={data.image} />;
      })}

      <div>chart</div>
      <div className="buttons">
        <Button theme="light" />
        <Button theme="dark" />
      </div>
    </div>
  );
};
