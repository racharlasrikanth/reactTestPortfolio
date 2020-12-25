import React from "react";
//Importing images for about section
import home1 from "../img/home1.png";
// styled components
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Discription>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any profissional photogray we are famous in the
          photography and wedding movies with cool animations.
        </p>
        <button>Contact Us</button>
      </Discription>
      <Image>
        <img src={home1} alt="A man with camera" />
      </Image>
    </About>
  );
};

//Styles

const About = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
`;

const Discription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
