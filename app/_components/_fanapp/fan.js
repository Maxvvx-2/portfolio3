import React from "react";
import "./fan.css";

export default function fan() {
  return (
    <>
      <div className="Par">
        <div className="fan">
          <div className="div-1">
            <p className="text-2xl">30</p>
            <p className="text">Client</p>
          </div>
          <hr></hr>
          <div className="div-2">
            <p className="text-2xl">100</p>
            <p className="text">Project</p>
          </div>
          <hr></hr>
          <div className="div-3">
            <p className="text-2xl">10 Year</p>
            <p className="text">Experience</p>
          </div>
        </div>
      </div>
      <div className="ref">
        <div className="div-top">
          <p className="text-xs text-zinc-400	">welcome</p>
          <p className="text-2xl">About me</p>
          <p className="text-xs text-zinc-400">
            A skilled and innovative front-end developer
            <br /> proficientin creating responsive and dynamic user
            <br /> interfaces using modern web technologies.
          </p>
        </div>
        <div className="div-mid div-lin">
          <div className="div-said">
            <img className="aboutImage" src="./man1.png " />
          </div>
          <div className="div-said-2">
            <p>Imad eddine benhamidhca</p>
            <p>Front end Developer</p>

            <p>A skilled and innovative front-end developer
            <br /> proficientin creating responsive and dynamic user
            <br /> interfaces using modern web technologies A skilled <br/>and innovative front-end developer
            <br /> proficientin creating responsive and dynamic user
            <br /> interfaces using modern web technologies.</p>
            <button></button>
          </div>
        </div>
      </div>
    </>
  );
}
