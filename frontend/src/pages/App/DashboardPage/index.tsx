import AppLayout from "../../../layouts/AppLayout";
import "./index.css";

const DashboardPage = () => {
  return (
    <AppLayout>
      <div className="dash-container">
        <div className="box row1">Content 1</div>
        <div className="row2">
          <div className="box">Content 2</div>
          <div className="box">Content 3</div>
        </div>
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
