import { useState, FC } from "react";
import { ThreeDotsIcon } from "../icon/iconStore/ThreeDotsIcon";
import { ThreeDotsDropdownProps } from "./types";

/**
 * @name ThreeDotsDropdown
 * @description A ThreeDotsDropdown component
 * @param {ThreeDotsDropdownProps} props The props of the component
 * @returns {JSX.Element} The JSX element
 * @example
 * <ThreeDotsDropdown options={[{name: "OptionName"}]} dropdownPosition="top"/>
 */

export const ThreeDotsDropdown: FC<ThreeDotsDropdownProps> = (
  props: ThreeDotsDropdownProps
): JSX.Element => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const threeDotsClickHandler = (): void => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <div className="three-dots" onClick={threeDotsClickHandler}>
      <ThreeDotsIcon color="#9896A1" />
      {isClicked && (
        <div className={`dropdown ${props.dropdownPosition}`}>
          {props.options.map((option) => (
            <a key={option.name}>{option.name}</a>
          ))}
        </div>
      )}
    </div>
  );
};
