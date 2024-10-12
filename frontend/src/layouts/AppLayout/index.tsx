import NavbarComponent from "../../components/Dashboard/NavbarComponent";
import SideNavbarComponent from "../../components/Dashboard/SideNavbarComponent";
import MainComponent from "../../components/MainComponent";

interface Props {
  children: React.ReactNode;
}
const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <NavbarComponent />
      <SideNavbarComponent />
      <MainComponent>{children}</MainComponent>
    </div>
  );
};

export default AppLayout;
