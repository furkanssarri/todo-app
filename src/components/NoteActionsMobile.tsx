import { useContext } from "react";
import { btns, type Btn, type BtnView } from "../constants/pageViews";
import { MobileContext } from "../context/MobileContext";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useActiveView } from "../utils/useActiveView";

type Props = {
  exclude?: BtnView[];
  noteId?: string | undefined;
  handleOpenConfirm?: (
    id: string,
    action: "delete" | "archive" | "restore",
  ) => void;
};

const NoteActionsMobile = ({
  exclude = [],
  noteId,
  handleOpenConfirm,
}: Props) => {
  const activeView = useActiveView();
  const { isDesktop } = useContext(MobileContext);
  if (activeView.path === "/create") {
    exclude.push("delete", "archive");
  }
  const filteredBtns = btns.filter((btn) => !exclude?.includes(btn.view));

  const navigate = useNavigate();

  const showBackBtn = !isDesktop && btns[0].view === "back";
  const BackIcon = showBackBtn ? btns[0].icon : null;

  const onAction = (view: BtnView) => {
    switch (view) {
      case "delete":
        if (noteId && handleOpenConfirm)
          return handleOpenConfirm(noteId, "delete");
        console.log(noteId);
        break;
      case "archive":
        if (noteId && handleOpenConfirm)
          return handleOpenConfirm(noteId, "archive");
        console.log("ran");
        break;
      case "restore":
        if (noteId && handleOpenConfirm)
          return handleOpenConfirm(noteId, "restore");
        console.log("ran");
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
