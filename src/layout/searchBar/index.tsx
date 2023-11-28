import { useState } from "react";
import { SearchIcon } from "../../components/icon/iconStore/SearchIcon";
import { FC } from "react";

export const SearchBar:FC = (): JSX.Element => {
  const [content, setContent] = useState("");

  const fillinInput = (event):void => {
    setContent(event.target.value);
  };

  return (
    <div className="search-bar">
      <SearchIcon color="#9896A1" />
      <input
        value={content}
        onChange={fillinInput}
        placeholder="Search"
      ></input>
    </div>
  );
};
