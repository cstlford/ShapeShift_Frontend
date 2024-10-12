import "./index.css";
const MainComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="main-content">{children}</div>;
};

export default MainComponent;
