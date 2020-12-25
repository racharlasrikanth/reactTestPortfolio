import React from "react";
//Importing images for about section
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="discription">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for any profissional photogray we are famous in the
          photography and wedding movies with cool animations.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="A man with camera" />
      </div>
    </div>
  );
};

export default AboutSection;
