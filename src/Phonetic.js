import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} rel="phonetic" target="_blank">
        <i class="fa-solid fa-volume-high"></i>
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
