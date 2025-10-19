import React, { useEffect, useState } from "react";
import ProjectsData from "./ProjectsData"; // Ensure this path is correct
import ImageCarousel from "@components/ImageCarousel";
import "./gallery.css";

// Sort projects by date (newest first)
ProjectsData.sort((a, b) => new Date(b.date) - new Date(a.date));

const Gallery = () => {
  const [preload, setPreload] = useState({ loaded: 0, total: 0, done: false });

  useEffect(() => {
    // collect all image urls from projects
    const urls = ProjectsData.flatMap((p) => p.images || []);
    const unique = Array.from(new Set(urls));
    const total = unique.length;
    if (total === 0) {
      setPreload({ loaded: 0, total: 0, done: true });
      return;
    }

    let cancelled = false;
    setPreload({ loaded: 0, total, done: false });

    // simple loader that resolves on load or error
    const loadImage = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
      });

    // limited concurrency runner
    (async function runPool(concurrency = 4) {
      let index = 0;
      let loaded = 0;
      const executing = new Set();

      const enqueue = async () => {
        if (cancelled) return;
        while (index < unique.length && executing.size < concurrency) {
          const url = unique[index++];
          const p = loadImage(url).then(() => {
            loaded += 1;
            if (!cancelled) setPreload((prev) => ({ ...prev, loaded }));
            executing.delete(p);
          });
          executing.add(p);
        }
        if (executing.size) await Promise.race(executing);
        if (index < unique.length) return enqueue();
      };

      await enqueue();
      // wait for remaining tasks
      await Promise.all(Array.from(executing));
      if (!cancelled) setPreload((prev) => ({ ...prev, done: true }));
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      className="gallery"
      data-preload-loaded={preload.loaded}
      data-preload-total={preload.total}
      data-preload-done={preload.done}
    >
      {ProjectsData.map((project) => (
        <a
          key={project.id} // Ensure each key is unique. Its important for React to keep track of each element
          title={project.title}
          className="card"
          href={project.link || null} // Ensure this path is correct
        >
          <ImageCarousel images={project.images} />

          <div className="title">{project.title}</div>
          {/* <div className="year">{new Date(project.date).getFullYear()}</div> */}
        </a>
      ))}
    </section>
  );
};

export default Gallery;
