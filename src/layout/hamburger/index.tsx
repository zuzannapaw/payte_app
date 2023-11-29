import { useState } from "react";
import { MenuIcon } from "../../components/icon/iconStore/MenuIcon";
import { FC } from "react";

/**
 * @name Hamburger
 * @description A Hamburger component
 * @returns {JSX.Element} The JSX element
 * @example
 * <Hamburger/>
 */

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
          <p onClick={hamburgerClickHandler}>X</p>
        </div>
      )}
    </div>
  );
};
