type ChildrenProps = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: ChildrenProps) => {
  return <aside className="inner-sidebar">{children}</aside>;
};

export default Sidebar;
