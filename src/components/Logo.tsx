import { Link } from "react-router-dom";
import IconLogo from "./logo/IconLogo";

const Logo = () => {
  return (
    <section className="logo-wrapper">
      <Link to="/" className="logo-wrapper-link" aria-label="Logo">
        <IconLogo className="logo" aria-hidden="true" />
      </Link>
    </section>
  );
};

export default Logo;
