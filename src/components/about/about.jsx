import Footer from "@components/about/footer/Footer";
import "./about.css";

import Tooltip from "@components/Tooltip";

const About = () => {
  const email = "miroshin.architect@gmail.com";

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      console.log("Email copied to clipboard");
    } catch (err) {
      alert("Failed to copy email to clipboard. Please try again.");
      console.log("Email copied to clipboard");
    }
  };

  return (
    <section className="about">
      <h1>About me</h1>
      <article>
        <p>
          My name is Alexander Miroshin. I'm an architect and concept artist who
          strives for clean, functional, and attractive designs.
        </p>
        <p>
          My location is Nizhniy Novgorod, Russia, and I'm ready to work all
          over the world.
        </p>
        <p>
          You can mail me at{" "}
          <Tooltip text="Copied to clipboard!">
            <span className="email" onClick={copyEmailToClipboard}>
              {email}
            </span>{" "}
          </Tooltip>
          or...
        </p>
      </article>
      <Footer />
    </section>
  );
};

export default About;
