import "./index.css";
const MainComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <main className="main-content">{children}</main>;
};

export default MainComponent;
