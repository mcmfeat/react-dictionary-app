import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h6>{props.meaning.partOfSpeech}</h6>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
           
              <strong>Definition:</strong>
              {definition.definition}
              <br />
              <strong>Example:</strong>
              <em> {definition.example}</em>
              <br />
              <Synonyms synonyms={definition.synonyms} />
      
            
          </div>
        );
      })}
    </div>
  );
}
