import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
  const [content, setContent] = useState("");

  const fillinInput = (event) => {
    setContent(event.target.value);
    console.log(content);
  };

  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#9896A1" }} />
      <input
        value={content}
        onChange={fillinInput}
        placeholder="Search"
      ></input>
    </div>
  );
};
