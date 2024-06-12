import React from "react";
import "./servis.css";

export default function servis() {
  return (
    <div className="servis">
      <div>
        <p className="text-xs">service</p>
        <p className="text-2xl">What I Do</p>
        <p className="text-xs">
          A skilled and innovative front-end developer proficientin
          <br /> creating responsive and dynamic user interfaces using modern
          web technologies.
        </p>
      </div>
      <div className="buton">
        <button className="reacr-btn btn">
          <img />
          <p>Rect js</p>
        </button>
        <button className="reacr-next btn">
          <img />
          <p>Next js</p>
        </button>
        <button className="reacr-css btn">
          <img />
          <p>Css</p>
        </button>
        <button className="reacr-html btn">
          <img />
          <p>Html</p>
        </button>
      </div> 
    </div>
  );
}
