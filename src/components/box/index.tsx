import { ThreeDotsDropdown } from "../threeDotsdropdown";
export const Box = (props) => {
  return (
    <div className="box">
      <div className="title-and-dots">
        <p>{props.title}</p>
        <ThreeDotsDropdown/>
      </div>
     {props.children}
    </div>
  );
};
