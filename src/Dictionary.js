import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Form.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  
  return (
    <div className="Dictionary">
      <form onSubmit={search} autoComplete="off">
        <input
          type="search"
          placeholder="Type here..."
          onChange={handleKeywordChange}
        />
        <button>
          <i className="fa-solid fa-magnifying-glass" id="search-button"></i>
        </button>
      </form>
      <Results results={results} />
    </div>
  );
}
