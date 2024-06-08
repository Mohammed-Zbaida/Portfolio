import React from 'react';
import "./About.css"

const About = () => {
  return (
    <div>
       <section className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="img-container">
              <img src="https://freefrontend.dev/assets/square.png" alt="Square" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              <h2>About Me</h2> <br></br><br></br>
              <p>
                My name is Mohammed Zbaida. I am a motivated and versatile individual, always eager to take on new challenges. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. 
              </p>
              <p>
                I am ready to make a meaningful contribution and achieve great things, and available for any kind of job opportunity that suits my skills and interests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default About;
