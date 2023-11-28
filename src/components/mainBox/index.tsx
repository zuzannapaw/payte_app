import { MainBoxNav } from "./mainBoxNav";
import { MainBoxProps } from "./types";
import { FC } from "react";

export const MainBox: FC<MainBoxProps> = (props: MainBoxProps): JSX.Element => {
  return (
    <div className="main-box">
      <MainBoxNav />
      {props.children}
    </div>
  );
};
