import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.results.phonetic.audio} target="blank">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
