import "./AboutMe.css";
import Bubble from "../../components/Bubble/Bubble";
import Button from "../../components/shared/Button";
// import { useState } from "react";
function AboutMe({ imgSrc, firstName, lastName, desc }) {
  return (
    <div className="about">
      <div className="left">
        <h1 className="about-heading">
          Hello, my name is
          <br />
          <span className="my-name">
            {firstName} {lastName}
          </span>
        </h1>
        <p className="about-desc">{desc}</p>
        <Button className="fake-btn" text="Add text to Logo" />
        <input
          placeholder="Change Logo..."
          className="logo-change"
          type="text"
        />
      </div>
      <div className="right">
        <img className="about-image" src={imgSrc} alt="Man" />
        <Bubble
          text={
            "It's not me that wants to work for you... It's you that wants to hire me."
          }
        />
      </div>
    </div>
  );
}

export default AboutMe;
