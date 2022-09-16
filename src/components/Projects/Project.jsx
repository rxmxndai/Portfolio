import "./project.scss";
import { useState } from "react";
import Arrow from '../../assets/arrow.png'

const Skills = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: 'https://github.com/rxmxndai/Portfolio/blob/main/src/assets/mobile.png?raw=true',
      title: "Game Sallah ",
      desc: "It is a web-design of a game recommending site 'Game Sallah'. It's goal is to recommend games of their interest to the users.",
      img: 'https://github.com/rxmxndai/Portfolio/blob/main/src/assets/GameSallah.png?raw=true',
    },
    {
      id: "2",
      icon: "https://github.com/rxmxndai/Portfolio/blob/main/src/assets/mobile.png?raw=true",
      title: "Water Billing System",
      desc: "It is a web application for a water service supplier. It has basic CRUD for customer's personal and billing information.",
      img: "https://github.com/rxmxndai/Portfolio/blob/main/src/assets/GameSallah.png?raw=true",
    },
    {
      id: "3s",
      icon: "https://github.com/rxmxndai/Portfolio/blob/main/src/assets/mobile.png?raw=true",
      title: "Game Sallah",
      desc: "It is a web design of a game recommendation site 'Game Sallah'. It's goal is to recommend like games to users..",
      img: "https://github.com/rxmxndai/Portfolio/blob/main/src/assets/GameSallah.png?raw=true",
    },
  ];


  const handleClick = (way) => {  
    way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1: 2):
    setCurrentSlide(currentSlide < data.length-1? currentSlide+1: 0); 
  }



  return (
    <div className="projects" id="projects">
      <h2 className="pageTitle">Projects</h2>
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map( d => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imageContainer">
                    <img src={d.icon} alt="" />
                  </div>

                  <h2>{d.title}</h2>

                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>

                <div className="rightContainer"></div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}

        </div>
      

      <img src={Arrow} className="arrow left" alt=""  onClick={() => handleClick('left')} />
      <img src={Arrow} className="arrow right" alt="" onClick={() => handleClick()} />
    </div>
  );
};

export default Skills;

