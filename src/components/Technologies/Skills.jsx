
import "./skills.scss";
import SkillsList from "../skillsList/skillsList";

import { useState, useEffect } from "react";
import {
  featuredSkills,
  Languages,
  Frontend,
  UIUX,
  Backend 
} from "./skillsData";



const Projects = () => {
  const [active, setActive] = useState("featuredSkills");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featuredSkills",
      title: "Featured",
    },
    {
      id: "frontend",
      title: "Frontend"
    },
    {
      id: "backend",
      title: "Backend",
    },
    {
      id: "uiux",
      title: "UI/UX",
    },
    {
      id: "programmingLanguages",
      title: "Programming",
    }
  ];

  useEffect(() => {
    switch (active) {
      case "featuredSkills":
        setData(featuredSkills);
        break;

      case "frontend":
        setData(Frontend);
        break;

      case "programmingLanguages":
        setData(Languages);
        break;

      case "uiux":
        setData(UIUX);
        break;
      case "backend":
        setData(Backend);
        break;

      default:
        setData(featuredSkills);
    }
  }, [active]);

  return (
    <div className="skills" id="skills">

      <h1>Technologies</h1>

      <ul>
        {list.map((item) => (
          <SkillsList
            id={item.id}
            title = {item.title}
            active={active === item.id}
            setActive={setActive}
          />
        ))}
      </ul>


      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
