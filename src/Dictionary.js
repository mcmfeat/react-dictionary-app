import React, { useState } from "react";

import "./Form.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <button>
          {" "}
          <i className="fa-solid fa-magnifying-glass" id="search-button"></i>
        </button>
      </form>
    </div>
  );
}
