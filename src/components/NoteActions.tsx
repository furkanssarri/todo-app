import Button from "./Button";

const NoteActions = () => {
  return (
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
  );
};

export default NoteActions;
