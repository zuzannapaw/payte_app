import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Hamburger = () => {
  const [isClicked, setIsClicked] = useState(false);

  const hamburgerClickHandler = () => {
    setIsClicked((prevState) => !prevState);
  };
  return (
    <div className="hamburger" onClick={hamburgerClickHandler}>
      {<FontAwesomeIcon icon={faBars} style={{color:"#9896A1"}} />}
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
