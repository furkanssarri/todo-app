import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main role="main" aria-label="404 Not Found Page">
      <article className="note-details">
        <section className="note-content">
          <div className="note-body">
            <h1 id="notfound-title" aria-describedby="notfound-description">
              Grats. You brokes-ded it.
            </h1>
            <p id="notfound-description">
              Your ambition has broke our systems, because what you are looking
              for does not exist. Also, there's a teeny tiny bit of possibility
              that our systems are broke, and thats totally on you, duh.
            </p>

            <p>
              You can keep it low and gracefully go to the{" "}
              <Link
                className="return-link"
                to={"/"}
                aria-label="Return to homepage"
              >
                homepage
              </Link>
              . And if the homepage is also not working, that means we're
              screwed.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
};

export default NotFound;
