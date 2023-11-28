import { ThreeDotsDropdown } from "../threeDotsDropdown";
import { BoxProps } from "./types";
import { FC } from "react";

export const Box: FC<BoxProps> = (props: BoxProps): JSX.Element => {
  return (
    <div className="box">
      <div className="title-and-dots">
        <p>{props.title}</p>
        <ThreeDotsDropdown
          options={[{ name: "More" }, { name: "Help" }, { name: "Settings" }]}
          dropdownPosition="bottom"
        />
      </div>
      {props.children}
    </div>
  );
};
