import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {

  return (
    <div className="Phonetic">
      <div className="row">
        <div className="col">
          <a href={props.phonetic.audio} rel="phonetic" target="_blank">
            <i class="fa-solid fa-volume-high"></i>
          </a>
        </div>
      </div>
      {props.phonetic.text}
    </div>
  );
}
