import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer role="contentinfo">
      <a
        href="https://github.com/furkanssarri"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
        aria-label="Open GitHub profile of furkanssarri in a new tab"
      >
        <FaGithub className="footer-icon" aria-hidden="true" />
        furkanssarri {currentYear}
      </a>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Frontend Mentor website in a new tab"
        >
          Frontend Mentor
        </a>
      </div>
    </footer>
  );
};

export default Footer;
