import { FaGithub } from "react-icons/fa";

const GithubLink = ({ link }) => {
  const handleGithubClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <FaGithub
        className="h-8 w-8 hover:scale-125 transition-transform cursor-pointer"
        style={{ fill: "yellow" }}
        onClick={handleGithubClick}
      ></FaGithub>
    </div>
  );
};

export default GithubLink;