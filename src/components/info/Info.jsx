import About from "@components/about/About";
import Footer from "@components/footer/Footer";

import "./info.css";

const Info = () => {
  return (
    <section className="info">
      {/* <div className="content"> */}
      <About />
      <Footer />
      {/* </div> */}
    </section>
  );
};

export default Info;
