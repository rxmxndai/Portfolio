import "./about.scss";
import aboutPic from "../../imgs/about.png";
// #59b256
const About = () => {
  return (
    <div className="a" id="a">
      <div className="left">
        <div className="card bg"></div>
        <div className="card">
          <img src={aboutPic} alt="" className="img" />
        </div>
      </div>

      <div className="right">
        <h1 className="title">About Me</h1>
        <div className="desc">
          <p className="about">
            I am a student of Bsc(hons) in Computer Science in Herald College
            Kathmandu.
          </p>
          <p className="about">
            I design and develop websites and web application. I can build webs
            using popular frameworks like node js and react js. Lately, I am
            interested in big data.
          </p>
          <p className="about">
            I code on Java, JavaScript and C++ mainly. They can give me a wide
            scope for my interest and improvement. Besides tech stuff, I love
            working out in the gym and learning new things.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
