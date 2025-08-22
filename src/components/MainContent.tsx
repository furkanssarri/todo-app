import Header from "./Header";
import NotesList from "./NotesList";
import NoteBody from "./NoteBody";
import ActionsMenu from "./ActionsMenu";
import type { Note } from "../utils/useData";

type Props = {
  data: Note[] | null;
  error: string | null;
  isLoading: boolean;
};
const MainContent = ({ data, error, isLoading }: Props) => {
  return (
    <main>
      <Header title="All Notes" />
      <div className="main-content-wrapper">
        <NotesList data={data} error={error} isLoading={isLoading} />
        <NoteBody data={data} error={error} isLoading={isLoading} />
        <ActionsMenu />
      </div>
    </main>
  );
};

export default MainContent;
