import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <a
        href="https://github.com/furkanssarri"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
        aria-label="GitHub profile of furkanssarri"
      >
        <FaGithub className="footer-icon" /> furkanssarri {currentYear}
      </a>{" "}
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
      </div>
    </>
  );
};

export default Footer;
