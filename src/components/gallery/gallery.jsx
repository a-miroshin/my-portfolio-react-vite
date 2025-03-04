// import React from "react";
import projects from "./projects"; // Ensure this path is correct
import "./gallery.css";

// Sort projects by date (newest first)
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

const Gallery = () => {
  return (
    <section className="gallery">
      {projects.map((project) => (
        <a
          key={project.id} // Ensure each key is unique. Its important for React to keep track of each element
          title={project.title}
          className="card"
          href={project.link || "#"} // Ensure this path is correct
        >
          <div className="image-container">
            <img src={project.image} alt={project.title} />
          </div>
          {/* <div className="title">{project.title}</div> */}
          {/* <div className="year">{new Date(project.date).getFullYear()}</div> */}
        </a>
      ))}
    </section>
  );
};

export default Gallery;
