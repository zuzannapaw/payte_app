import { useState } from "react";
import { ThreeDotsIcon } from "../icon/iconStore/ThreeDotsIcon";

export const ThreeDotsDropdown = () => {
  const [isClicked, setIsClicked] = useState(false);

  const threeDotsClickHandler = () => {
    setIsClicked((prevState) => !prevState);
  };
  return (
    <div className="three-dots" onClick={threeDotsClickHandler}>
      <ThreeDotsIcon color="#9896A1" />
      {isClicked && (
        <div className="dropdown">
          <ul>
            <li>option 1</li>
            <li>option 2</li>
            <li>option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};
