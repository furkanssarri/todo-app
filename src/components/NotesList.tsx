import data from "../data/data.json";
import SvgIconPlus from "./icons/IconPlus";

const NotesList = () => {
  return (
    <>
      <button className="create-note-button text-preset-sans-4">
        <SvgIconPlus /> Create New Note
      </button>
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="note-item text-preset-sans-3">
                {item.title}
                <div className="item-details">
                  <div className="item-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="item-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="item-date">{item.lastEdited}</span>
                </div>
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default NotesList;
