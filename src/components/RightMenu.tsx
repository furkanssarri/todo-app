import Button from "./Button";

const RightMenu = () => {
  return (
    <menu className="right-menu">
      <section className="actions">
        <ul>
          <li className="action-button">
            <Button startIcon={"delete"} size={"lg"} variant={"outline"}>
              {" "}
              Delete Note
            </Button>
          </li>
          <li className="action-button">
            <Button startIcon={"archive"} size={"lg"} variant={"outline"}>
              {" "}
              Archive Note
            </Button>
          </li>
        </ul>
      </section>
    </menu>
  );
};

export default RightMenu;
