type PropTypes = {
  title: string;
};

const MainTitle = ({ title }: PropTypes) => {
  return <h1>{title}</h1>;
};

export default MainTitle;
