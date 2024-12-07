import NavbarComponent from "../../components/Dashboard/NavbarComponent";
import SideNavbarComponent from "../../components/Dashboard/SideNavbarComponent";
import MainComponent from "../../components/MainComponent";

interface Props {
  children: React.ReactNode;
}
const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <SideNavbarComponent />
      <MainComponent>{children}</MainComponent>
    </>
  );
};

export default AppLayout;
