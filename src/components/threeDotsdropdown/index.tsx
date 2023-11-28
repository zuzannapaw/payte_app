import { useState } from "react";
import { ThreeDotsIcon } from "../icon/iconStore/ThreeDotsIcon";
import { ThreeDotsDropdownProps } from "./types";
import { FC } from "react";

export const ThreeDotsDropdown: FC<ThreeDotsDropdownProps> = (
  props: ThreeDotsDropdownProps
): JSX.Element => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const threeDotsClickHandler = ():void => {
    setIsClicked((prevState) => !prevState);
  };


  return (
    <div className="three-dots" onClick={threeDotsClickHandler}>
      <ThreeDotsIcon color="#9896A1" />
      {isClicked && (
        <div className={`dropdown ${props.dropdownPosition}`}>
          {props.options.map((option) => (
            <a>{option.name}</a>
          ))}
        </div>
      )}
    </div>
  );
};
