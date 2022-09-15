import "./skills.scss";
import Arrow from '../../assets/arrow.png'
import mobileIcon from '../../assets/mobile.png'
import GameSallah from "../../assets/GameSallah.png"

const Skills = () => {
  const data = [
    {
      id: "1",
      icon: {mobileIcon},
      title: "Game Sallah ",
      desc: "It is a web design of a game recommendation site 'Game Sallah'. It's goal is to recommend like games to users.",
      img: {GameSallah},
    },
    {
      id: "2",
      icon: "../../assets/mobile.png",
      title: "Game Sallah: Game recommendation site",
      desc: "It is a web design of a game recommendation site 'Game Sallah'. It's goal is to recommend like games to users.",
      img: "../../imgs/GameDesc.png",
    },
    {
      id: "3s",
      icon: "../../imgs/mobile.png",
      title: "Game Sallah: Game recommendation site",
      desc: "It is a web design of a game recommendation site 'Game Sallah'. It's goal is to recommend like games to users..",
      img: "../../imgs/GameDesc.png",
    },
  ];




  return (
    <div className="skills" id="skills">
      <div className="slider">
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
      

      <img src={Arrow} className="arrow left" alt="" />
      <img src={Arrow} className="arrow right" alt="" />
    </div>
  );
};

export default Skills;
