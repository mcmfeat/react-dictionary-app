import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

import "./Results.css";

export default function Results(props) {
console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h4>{props.results.word}</h4>

        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <p>
                <Meaning meaning={meaning} />
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
