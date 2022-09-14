import "./project.scss";
import ProjectLists from "../ProjectList/ProjectLists";
import { useState, useEffect } from "react";
import {
  featuredProject,
  webAppProject,
  webDesignProject,
  othersProject,
} from "./projectsData.jsx";



const Projects = () => {
  const [active, setActive] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "webApp",
      title: "Web App",
    },
    {
      id: "webDesigns",
      title: "Web Designs",
    },
    {
      id: "others",
      title: "Others",
    },
  ];

  useEffect(() => {
    switch (active) {
      case "featured":
        setData(featuredProject);
        break;

      case "webApp":
        setData(webAppProject);
        break;

      case "webDesigns":
        setData(webDesignProject);
        break;

      case "others":
        setData(othersProject);
        break;

      default:
        setData(featuredProject);
    }
  }, [active]);

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>

      <ul>
        {list.map((item) => (
          <ProjectLists
            id={item.id}
            title={item.title}
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
