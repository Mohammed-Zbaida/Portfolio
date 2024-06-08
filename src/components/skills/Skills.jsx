import React from 'react';
import "./Skills.css";


const Skills = () => {
  return (
    <div class="skills" id="skills">
      <div class="container">
        <div class="main-heading">
          <h2 class="main-title">Skills</h2>
          <p>
            Highlight your projects and achieve your goals with my versatile
            technical skills. Contact me to discuss your next exciting project !
          </p>
        </div>
        <div class="skills-container">
          <div class="box html category__box">
            <img src="../imgs/icons8-html-92.png" alt="" />
            <h4>HTML</h4>
          </div>
          <div class="box css category__box">
            <img src="../imgs/icons8-css-92.png" alt="" />
            <h4>CSS</h4>
          </div>
          <div class="box js category__box">
            <img src="../imgs/icons8-js-92.png" alt="" />
            <h4>JAVASCRIPT</h4>
          </div>
          <div class="box php category__box">
            <img src="../imgs/icons8-php-92.png" alt="" />
            <h4>PHP</h4>
          </div>
          <div class="box mysql category__box">
            <img src="../imgs/MYSQL.svg" alt="" />
            <h4>MYSQL</h4>
          </div>
          <div class="box react category__box">
            <img src="../imgs/icons8-réagir-92.png" alt="" />
            <h4>REACT JS</h4>
          </div>
          <div class="box linux category__box">
            <img src="../imgs/Laravel_logo.png" alt="" />
            <h4>LARAVEL</h4>
          </div>
          <div class="box bootstrap category__box">
            <img src="../imgs/icons8-bootstrap-92.png" alt="" />
            <h4>BOOTSTRAP</h4>
          </div>
          <div class="box git category__box">
            <img src="../imgs/icons8-git-92.png" alt="" />
            <h4>GIT</h4>
          </div>
          <div class="box node category__box">
            <img src="../imgs/node.svg" alt="" />
            <h4>Node Js</h4>
          </div>
          <div class="box MongoDB category__box">
            <img src="../imgs/mongodb.svg" alt="" />
            <h4>MongoDB</h4>
          </div>
          <div class="box MongoDB category__box">
            <img src="../imgs/express.svg" alt="" />
            <h4>ExpressJS</h4>
          </div>
          <div class="box Docker category__box">
            <img src="../imgs/docker.png" alt="" />
            <h4>Docker</h4>
          </div>
          <div class="box VS category__box">
            <img src="../imgs/Visual_Studio.png" alt="" />
            <h4>Visual Studio</h4>
          </div>
          <div class="box Tailwind category__box">
            <img src="../imgs/tailwind.svg" alt="" />
            <h4>TailwindCSS</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
