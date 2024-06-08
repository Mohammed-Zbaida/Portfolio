import React from 'react';
import './Home.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebook, FaTwitterSquare } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { RiContactsFill } from 'react-icons/ri';
import { MdDownload } from 'react-icons/md';

const personalData = {
  name: "Mohammed Zbaida",
  designation: "Full Stack Web Developer",
  github: "https://github.com/Mohammed-Zbaida",
  linkedIn: "https://www.linkedin.com/in/mohammed-zbaida-214630176/",
  resume: "https://example.com/resume"
};

function Home() {

  const handleDownload = () => {
    const fileUrl = '../imgs/Cv.jpg';
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Cv.jpg'; 
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  };


  return (
    <section className="hero-section">
      <div className="content-grid">
        <div className="content-text">
          <h1 className="title">
            Hello, <br />
            This is <span className="highlight">{personalData.name}</span>
            {`, I'm a  `}
            <span className="highlight-alt">{personalData.designation}</span>.
          </h1>
          <div className="social-links">
          <a href={personalData.linkedIn} target="_blank" className="social-icon"><BsLinkedin size={30} /></a>
            <a href={personalData.github} target="_blank" className="social-icon"><BsGithub size={30} /></a>
          </div>
          <div className="action-buttons">        
            <a target="_blank" className="button-89" role="button" onClick={handleDownload}>
              <span>Get Resume</span>
            </a>
          </div>
        </div>
        <div className="code-box">
          <div className="code-header">
            <div className="circle red"></div>
            <div className="circle orange"></div>
            <div className="circle green"></div>
          </div>
          <div className="code-content">
            <code className="code">
              <div>
                <span className="keyword">const </span> 
                <span className="variable">coder </span> 
                <span className="operator">= </span> 
                <span className="bracket">{'{'}</span>
              </div>

              <div><span className="property">  name</span><span className="operator">:</span> <span className="string">'Mohammed Zbaida'</span><span className="operator">,</span></div>
              <div>
                <span className="property">  skills</span>
                <span className="operator">:</span> 
                <span className="array">{'['}</span>
                <span className="string">'HTML'</span>, 
                <span className="string">'CSS'</span>, 
                <span className="string">'PHP'</span>, 
                <span className="string">'JavaScript'</span>, 
                <span className="string">'React Js'</span>, 
                <div>
                <span className="string">  'Laravel'</span>, 
                <span className="string">'SQL'</span>,
                <span className="string">'MySQL'</span>, 
                <span className="string">'MongoDB'</span>,
                <span className="array">{']'}</span>
                <span className="operator">,</span>
                </div>
              </div>
              <div><span className="property">  hardWorker</span><span className="operator">:</span> <span className="boolean">true</span><span className="operator">,</span></div>
              <div><span className="property">  quickLearner</span><span className="operator">:</span> <span className="boolean">true</span><span className="operator">,</span></div>
              <div><span className="property">  problemSolver</span><span className="operator">:</span> <span className="boolean">true</span><span className="operator">,</span></div>
              <div><span className="property"></span> <span className="bracket">{'};'}</span> </div>
              <div><span className="bracket"></span></div>
              <div><span className="bracket"></span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
