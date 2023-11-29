import { ThreeDotsDropdown } from "../threeDotsDropdown";
import { BoxProps } from "./types";
import { FC } from "react";

/**
 * @name Box
 * @description A Box component
 * @param {BoxProps} props The props of the component
 * @returns {JSX.Element} The JSX element
 * @example
 * <Box>{<Component/>}</Box>
 */

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
