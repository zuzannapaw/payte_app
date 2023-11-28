import { useState } from "react";
import { MenuIcon } from "../../components/icon/iconStore/MenuIcon";
import { FC } from "react";

export const Hamburger: FC = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const hamburgerClickHandler = (): void => {
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
