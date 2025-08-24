import { useEffect } from "react";
import type { View } from "../constants/mobileViews";
import Button from "./Button";

type Props = {
  activeView: View;
};

const NoteActions = ({ activeView }: Props) => {
  useEffect(() => {
    console.log(activeView);
  }, [activeView]);

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
