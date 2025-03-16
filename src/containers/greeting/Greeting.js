import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <Fade down duration={1000}>
            <div className="greeting-image-div">
              <div style={{ position: "relative", width: "70%" }}>
                <img
                  alt="Headshot of Rensel"
                  src={require("../../assets/images/me.jpg")}
                  style={{ borderRadius: "1rem", width: "100%", height: "auto" }}
                ></img>
               {/*  <div 
                  style={{ 
                    position: "absolute", 
                    bottom: "4px", 
                    left: "0", 
                    right: "0", 
                    backgroundColor: "rgba(0, 0, 0, 0.7)", 
                    color: "white", 
                    padding: "10px", 
                    borderBottomLeftRadius: "1rem", 
                    borderBottomRightRadius: "1rem",
                    textAlign: "center"
                  }}
                >
                  <div style={{ fontWeight: "bold" }}>Trond Rensel</div>
                  <div style={{ fontSize: "0.9rem" }}>Senior Software & AI Engineer</div>
                </div> */}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
}
