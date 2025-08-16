import data from "../data/data.json";

const NotesList = () => {
  return (
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
  );
};

export default NotesList;
