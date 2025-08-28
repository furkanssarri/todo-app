type PropTypes = {
  title: string;
};

const MainTitle = ({ title }: PropTypes) => {
  return <h1 className="main-title text-preset-1">{title}</h1>;
};

export default MainTitle;
