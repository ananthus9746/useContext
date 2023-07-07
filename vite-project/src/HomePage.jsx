import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/admin/Ongoingprojects";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Process the response data
        console.log(data.projects);
        setProject(data.projects);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  // this is for the first Link
  const data1 = {
    from: "Link #1",
    message: "Welcome to ananthus.ann@gmail.com",
    timestamp: Date.now(),
  };

  // this is for the second Link
  const data2 = {
    from: "Link #2",
    message: "ananthus.ann@gmail.com",
    timestamp: Date.now(),
  };

  return (
    <>
      <h1>Home Page</h1>
      <p>
        <Link to="/about" state={data1}>
          Project zebaco 1(Link #1)
        </Link>
      </p>
      <p>
        <Link to="/about" state={data2}>
          Project laucg 2 (Link #2)
        </Link>
      </p>

      <h1>Projects</h1>
      {project.map((project) => {
        return (
          <div className="project_div" key={project.id}>
            <p> {project.projectName}</p>
            <p> {project.blockchain}</p>
            <p> {project.createdAt}</p>
            <p> {project.email}</p>
            <p> {project.projectImage}</p>

            <img
              className="project_img"
              src={"http://localhost:5000" + "/images/" + project?.projectImage}
              alt="projectImage"
            />
            <Link to={'/viewProject'}  state={{ projectDetails:project }}>
              <p style={{ color: "green", cursor: "pointer" }}>View more..</p>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default HomePage;
