import { MainBoxNav } from "./mainBoxNav";
import { MainBoxProps } from "./types";
import { FC } from "react";

/**
 * @name MainBox
 * @description A MainBox component
 * @param {MainBoxProps} props The props of the component
 * @returns {JSX.Element} The JSX element
 * @example
 * <MainBox> {<Component/>} </MainBox>
 */

export const MainBox: FC<MainBoxProps> = (props: MainBoxProps): JSX.Element => {
  return (
    <div className="main-box">
      <MainBoxNav />
      {props.children}
    </div>
  );
};
