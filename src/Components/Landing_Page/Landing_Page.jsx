// import React from "react";
// import { Link } from "react-router-dom";
import "./LandingPage.css";


const Landing_Page = () => {
  return (
    <section className="hero-section"> {/* Creating a section with className name 'hero-section' */}
      <div>
        <div data-aos="fade-up" className="flex-hero"> {/* Creating a div with data-aos attribute and className name 'flex-hero' */}

            <h1>
              Your Health<br/>

              <span className="text-gradient">

                Our Responsibility
              </span>
            </h1>
              <div className="blob-cont"> {/* Creating a div with className name 'blob-cont' */}
                  <div className="blue blob"></div> {/* Creating a blue blob inside the 'blob-cont' div */}
              </div>
              <div className="blob-cont"> {/* Creating another div with className name 'blob-cont' */}
                  <div className="blue1 blob"></div> {/* Creating a different blue blob inside the second 'blob-cont' div */}
              </div>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
            </h4>
            <a href="#services"> {/* Creating a hyperlink to jump to the 'services' section */}
              <button className="button">Get Started</button> {/* Creating a button with className name 'button' */}
            </a>
        </div>
      </div>
    </section>
  );
};

export default Landing_Page; // Exporting the Landing_Page component to be used in other parts of the application