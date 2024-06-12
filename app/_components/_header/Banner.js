import React from "react";
import "./banner.css";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="banner bg-black">
      <div className="Banner-left">
        <div className="Banner-left-1">
          <p className="text-white	">Hello I'm</p>
          <p className="te-1 text-white	text-5xl ">Imad eddine Benhamidcha</p>
          <p className="te-1 text-white	">Front end Developer</p>
          <div className="div-btn">
            <button className="btn-more">More</button>
            <button className="btn-down">Download CV</button>
          </div>
          <div></div>
        </div>
      </div>
      <div className="Banner-right">
        <img
          className="image-banner"
          src="/man1.png"
          alt="imad eddine ben hamidcha"
        />
      </div>
    </div>
  );
}
