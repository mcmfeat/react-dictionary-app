import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Form.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(" ");
  let [loaded, setLoaded] = useState(false);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f9170000100000128d5bb38d1cb4263810e07823ef43c24";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
