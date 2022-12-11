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
            
              {definition.definition}
             
              <em> {definition.example}</em>
            
              <Synonyms synonyms={definition.synonyms} />
            
          </div>
        );
      })}
    </div>
  );
}
