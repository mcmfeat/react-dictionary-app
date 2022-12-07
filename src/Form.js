import React, { useState } from "react";

export default function Form() {
  let [keyword, setKeyword] = useState("");

function search(event) {
  event.preventDefault();
    alert(`Searching for ${keyword}`);
}

function handleKeywordChange(event) {
  setKeyword(event.target.value);
}

  return (<div className="Form">
    <form onSubmit={search}>
      <input type="search" onChange={handleKeywordChange}/>
      <button />
    </form>
  </div>)
}