import React from "react";
import "./About.css";
import Jump from 'react-reveal/Jump';


const About = () => {
  return (
    <>
    <Jump>

      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src="zeeshy.jpg" alt="profile-pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              I am expert in creating Websites for advance and modern
              enterpreneurship business development models to be the part of
              Globalization Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Iste iusto alias culpa distinctio facilis officia natus
              totam optio laudantium id delectus magnam velit, doloremque minima
              officiis. Repudiandae non placeat aliquam.Iste iusto alias culpa distinctio facilis officia natus
              totam optio laudantium id delectus magnam velit, doloremque minima
              officiis. Repudiandae non placeat aliquam.doloremque minima
              officiis. Repudiandae non placeat aliquam.
            </p>
          </div>
        </div>
      </div>
    </Jump>
    </>
  );
};

export default About;
