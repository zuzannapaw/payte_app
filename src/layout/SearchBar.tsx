import { useState } from "react";

export const SearchBar = () => {
  const [content, setContent] = useState("");

  const fillinInput = (event) => {
    setContent(event.target.value);
    console.log(content);
  };

  return (
    <div className="search-bar">
      <input
        value={content}
        onChange={fillinInput}
        placeholder="Search"
      ></input>
    </div>
  );
};
