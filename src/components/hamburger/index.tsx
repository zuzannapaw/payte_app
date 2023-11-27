import { useState } from "react";
import { MenuIcon } from "../icon/iconStore/MenuIcon";

export const Hamburger = () => {
  const [isClicked, setIsClicked] = useState(false);

  const hamburgerClickHandler = () => {
    setIsClicked((prevState) => !prevState);
  };
  return (
    <div className="hamburger" onClick={hamburgerClickHandler}>
      <MenuIcon color="#9896A1" />
      {isClicked && (
        <div className="hamburger-drawer">
          <ul>
            <li>Drawer</li>
            <li>Drawer</li>
            <li>Drawer</li>
          </ul>
        </div>
      )}
    </div>
  );
};
