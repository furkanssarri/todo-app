import { useContext } from "react";
import { btns, type Btn, type BtnView } from "../constants/pageViews";
import { MobileContext } from "../context/MobileContext";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

type Props = {
  exclude?: BtnView[];
  handleNoteActions?: (id: string, action: string) => void;
  noteId?: string | undefined;
};

const NoteActionsMobile = ({
  exclude = [],
  handleNoteActions,
  noteId,
}: Props) => {
  const { isDesktop } = useContext(MobileContext);
  const filteredBtns = btns.filter((btn) => !exclude?.includes(btn.view));

  const navigate = useNavigate();

  const showBackBtn = !isDesktop && btns[0].view === "back";
  const BackIcon = showBackBtn ? btns[0].icon : null;

  const onAction = (view: BtnView) => {
    switch (view) {
      case "delete":
        if (noteId && handleNoteActions)
          return handleNoteActions(noteId, "delete");
        break;
      case "archive":
        if (noteId && handleNoteActions)
          return handleNoteActions(noteId, "archive");
        break;
      default:
        console.log("unhandled");
        break;
    }
  };

  return (
    <>
      {!isDesktop && filteredBtns[0].view === "back" && (
        <div className="mobile-go-back">
          <a href="#" onClick={() => navigate(-1)}>
            {BackIcon && <BackIcon />}
            {filteredBtns[0].name}
          </a>
        </div>
      )}
      <ul>
        <ul>
          {!isDesktop &&
            filteredBtns.map((btn: Btn) => {
              if (btn.view === "back") return null;

              const isTextOnly = btn.view === "cancel" || btn.view === "save";

              return (
                <li key={btn.id}>
                  <Button
                    variant="text"
                    color={isTextOnly ? undefined : "primary"}
                    size={isTextOnly ? undefined : "lg"}
                    className={isTextOnly ? undefined : "btn"}
                    startIcon={isTextOnly ? undefined : btn.icon}
                    type={btn.view === "save" ? "submit" : "button"}
                    form={btn.view === "save" ? "add-new-form" : undefined}
                    id={btn.view}
                    onClick={() => onAction(btn.view)}
                  >
                    {isTextOnly && btn.name}
                  </Button>
                </li>
              );
            })}
        </ul>
      </ul>
    </>
  );
};

export default NoteActionsMobile;
