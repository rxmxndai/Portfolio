
import "./skills.scss";
import SkillsList from "../skillsList/skillsList";

import { useState, useEffect } from "react";
import {
  featuredSkills,
  Languages,
  Frameworks,
  Others,
  designTools

 
} from "./skillsData";



const Projects = () => {
  const [active, setActive] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featuredSkills",
      title: "Featured",
    },
    {
      id: "frameworks",
      title: "Framework"
    },
    {
      id: "programmingLanguages",
      title: "Programming",
    },
    {
      id: "designTools",
      title: "Designing",
    },
    {
      id: "others",
      title: "Others",
    },

  ];

  useEffect(() => {
    switch (active) {
      case "featuredSkills":
        setData(featuredSkills);
        break;

      case "frameworks":
        setData(Frameworks);
        break;

      case "programmingLanguages":
        setData(Languages);
        break;

      case "others":
        setData(Others);
        break;

      case "designTools":
        setData(designTools);
        break;

      default:
        setData(featuredSkills);
    }
  }, [active]);

  return (
    <div className="skills" id="skills">

      <h1>Skills</h1>

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
