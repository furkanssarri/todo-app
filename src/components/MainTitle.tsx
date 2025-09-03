type PropTypes = {
  title: string;
};

const MainTitle = ({ title }: PropTypes) => {
  return (
    <h1
      id="main-content-heading"
      role="heading"
      aria-level={1}
      tabIndex={-1}
      className="main-title text-preset-1"
    >
      {title}
    </h1>
  );
};

export default MainTitle;
