import { Link } from "react-router-dom";
import IconLogo from "./logo/IconLogo";

const Logo = () => {
  return (
    <section className="logo-wrapper">
      <Link to="/" className="logo-wrapper-link">
        <IconLogo className="logo" />
      </Link>
    </section>
  );
};

export default Logo;
