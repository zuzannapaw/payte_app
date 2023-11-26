import { MainBoxNav } from "./mainBoxNav";

export const MainBox = (props) => {
  return (
    <div className="main-box">
      <MainBoxNav />
      {props.children}
    </div>
  );
};
