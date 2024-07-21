import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// Define types for each logo
const logos = [
  {
    name: "Email",
    component: FaEnvelope,
    link: "mailto:jordancampbell2121@gmail.com",
  },
  {
    name: "LinkedIn",
    component: FaLinkedin,
    link: "https://www.linkedin.com/in/khushaal-nandwani-375b9191/",
  },
  {
    name: "GitHub",
    component: FaGithub,
    link: "https://github.com/khushaal-nandwani",
  },
];

function LogoBar() {
  return (
    <div className="flex flex-row gap-12 justify-center">
      {logos.map((logo, index) => (
        <a className="hover:scale-125 transition-transform" key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
          <logo.component className="md:h-12 md:w-12 h-9 w-9" />
        </a>
      ))}
    </div>
  );
}

export default LogoBar;