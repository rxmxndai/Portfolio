import "./about.scss";
import { FiDownload } from 'react-icons/fi';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="card bg"></div>
        <div className="card">
          <img src="https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/about.png?raw=true" alt="" className="img" />
        </div>
      </div>
      <div className="right" >
        <h1 className="title">About Me</h1>
        <div className="desc">
          <p className="about0">
            I am a <span className="focus">student</span> of Bsc(hons) Computer Science at Herald College
            Kathmandu.
          </p> {"\n"}
          <p className="about0">
            I can design and build webs
            using popular frameworks like  <span className="focus">node js</span> and <span className="focus">react js</span>. Lately, I am
            interested in big data.
          </p>
          <p className="about0">
            I code on Java,  <span className="focus">JavaScript</span> and C++ mainly. Besides tech stuff, I love
            working out and <span className="focus">learning </span> new things together.
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
