import { useContext } from "react";
import { btns, type Btn, type BtnView } from "../constants/mobileViews";
import { MobileContext } from "../context/MobileContext";
import { Link } from "react-router-dom";
import Button from "./Button";

type Props = {
  exclude?: BtnView[];
};

const NoteActionsMobile = ({ exclude = [] }: Props) => {
  const { isDesktop } = useContext(MobileContext);
  const filteredBtns = btns.filter((btn) => !exclude?.includes(btn.view));

  const showBackBtn = !isDesktop && btns[0].view === "back";
  const BackIcon = showBackBtn ? btns[0].icon : null;

  return (
    <>
      {!isDesktop && filteredBtns[0].view === "back" && (
        <div className="mobile-go-back">
          <Link to="/">
            {BackIcon && <BackIcon />}
            {filteredBtns[0].name}
          </Link>
        </div>
      )}
      <ul>
        {!isDesktop &&
          filteredBtns.map((btn: Btn) => {
            if (
              (btn.view !== "back" && btn.view === "cancel") ||
              btn.view === "save"
            ) {
              return (
                <li key={btn.id}>
                  <Button variant="text">{btn.name}</Button>
                </li>
              );
            }
            if (btn.view !== "back") {
              return (
                <li key={btn.id}>
                  <Button
                    startIcon={btn.icon}
                    variant="text"
                    color="primary"
                    size="lg"
                    className="btn"
                  ></Button>
                </li>
              );
            }
          })}
      </ul>
    </>
  );
};

export default NoteActionsMobile;
