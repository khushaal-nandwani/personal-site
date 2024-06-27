import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

// Define types for each logo
const logos = [
  {
    name: "Instagram",
    component: FaInstagram,
    link: "https://www.instagram.com/khushaalnandwani/",
  },
  {
    name: "LinkedIn",
    component: FaLinkedin,
    link: "https://www.linkedin.com/",
  },
  {
    name: "GitHub",
    component: FaGithub,
    link: "https://github.com/",
  },
];

function LogoBar() {
  return (
    <div className="flex flex-row gap-12">
      {logos.map((logo, index) => (
        <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
          <logo.component className="h-12 w-12" />
        </a>
      ))}
    </div>
  );
}

export default LogoBar;