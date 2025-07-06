import ProjectsData from "./ProjectsData"; // Ensure this path is correct
import ImageCarousel from "@components/ImageCarousel";
import "./gallery.css";

// Sort projects by date (newest first)
ProjectsData.sort((a, b) => new Date(b.date) - new Date(a.date));

const Gallery = () => {
  return (
    <section className="gallery">
      {ProjectsData.map((project) => (
        <a
          key={project.id} // Ensure each key is unique. Its important for React to keep track of each element
          title={project.title}
          className="card"
          href={project.link || null} // Ensure this path is correct
        >
          <ImageCarousel images={project.images} />

          {/* <div className="title">{project.title}</div> */}
          {/* <div className="year">{new Date(project.date).getFullYear()}</div> */}
        </a>
      ))}
    </section>
  );
};

export default Gallery;
