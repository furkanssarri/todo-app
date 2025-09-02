import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <article className="note-details">
      <section className="note-content">
        <div className="note-body">
          <h1>Grats. You brokes-ded it.</h1>
          <p>
            Your ambition has broke our systems, because what you are looking
            for does not exist. Also, there's a teeny tiny bit of possibility
            that our systems are broke, and thats totally on you, duh.
          </p>

          <p>
            You can keep it low and gracefully go to the{" "}
            <Link className="return-link" to={"/"}>
              homepage
            </Link>
            . And if the homepage is also not working, that means we're screwed.
          </p>
        </div>
      </section>
    </article>
  );
};

export default NotFound;
