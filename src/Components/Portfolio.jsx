/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/study.jpg";

const imageAltText = "laptop image with some person";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Potfolio WebPage",
    description:
      "Easy and Effective Way to Create Effective Porfolio.",
    url: "https://github.com/toshit111/OIBSIP.git",
  },
  {
    title: "Physics Tools Webpage",
    description:
      "Contains Physics tools like tempreture conversion",
    url: "https://github.com/toshit111/OIBSIP.git",
  },
  {
    title: "Landing Page",
    description:
      "Best and Simple Project For Web Developer Beginers.",
    url: "https://github.com/toshit111/OIBSIP.git",
  },
  {
    title: "TO-DO Webapp",
    description:
      "Webapp Contains Daily Routins To-Do with remainder.",
    url: "https://github.com/toshit111/OIBSIP.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
