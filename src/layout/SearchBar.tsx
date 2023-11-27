import { useState } from "react";
import { SearchIcon } from "../components/icon/iconStore/SearchIcon";

export const SearchBar = () => {
  const [content, setContent] = useState("");

  const fillinInput = (event) => {
    setContent(event.target.value);
    console.log(content);
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
