import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

import "./Result.css";

export default function Result(props) {
  console.log(props);
  if (props.result) {
    return (
      <div className="Result">
        <h4>{props.result.word}</h4>

        {props.result.meanings.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        {props.result.meanings.map(function (meaning, index) {
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
