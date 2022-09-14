import "./about.scss";
import aboutPic from "../../imgs/about.png";
import { FiDownload } from 'react-icons/fi';

const About = () => {
  return (
    <div className="a" id="about">
      <div className="left">
        <div className="card bg"></div>
        <div className="card">
          <img src={aboutPic} alt="" className="img" />
        </div>
      </div>

      <div className="right" >
        <h1 className="title">About Me</h1>
        <div className="desc">
          <p className="about0">
            I am a <span className="focus">student</span> of Bsc(hons) Computer Science at Herald College
            Kathmandu.
          </p>
          <p className="about0">
            I design and develop websites and web application. I can build webs
            using popular frameworks like  <span className="focus">node js</span> and <span className="focus">react js</span>. Lately, I am
            interested in big data.
          </p>
          <p className="about0">
            I code on Java,  <span className="focus">JavaScript</span> and C++ mainly. They can give me a wide
            scope for my interest and improvement. Besides tech stuff, I love
            working out in the gym and <span className="focus">learning </span> new things together.
          </p>
        </div>

        <div className="btnContainer">
          <button className="btnContact">
            Download CV
            <FiDownload className="iconSend" />
          </button>
          </div>
      </div>
    </div>
  );
};

export default About;
