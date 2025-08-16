import data from "../data/data.json";

const NotesList = () => {
  return (
    <ul>
      {data &&
        data.map((item) => (
          <li key={item.id}>
            <a href="#">{item.title}</a>
          </li>
        ))}
    </ul>
  );
};

export default NotesList;
