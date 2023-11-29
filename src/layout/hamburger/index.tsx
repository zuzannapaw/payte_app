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
    setIsClicked(!isClicked);
  };

  const hamburgerCloseHandler = (): void => {
    setIsClicked(false);
  };

  console.log(isClicked)
  return (
    <div className="hamburger" onClick={hamburgerClickHandler}>
      <MenuIcon color="#9896A1" />
      {isClicked && (
        <div className="hamburger-drawer">
          <button onClick={hamburgerCloseHandler}>X</button>
        </div>
      )}
    </div>
  );
};
