import { useState } from "react";
import { SearchIcon } from "../../components/icon/iconStore/SearchIcon";
import { FC } from "react";

/**
 * @name SearchBar
 * @description A SearchBar component
 * @returns {JSX.Element} The JSX element
 * @example
 * <SearchBar/>
 */

export const SearchBar: FC = (): JSX.Element => {
  const [content, setContent] = useState("");

  const fillInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setContent(event.target.value);
  };

  return (
    <div className="search-bar">
      <SearchIcon color="#9896A1" />
      <input value={content} onChange={fillInput} placeholder="Search"></input>
    </div>
  );
};
