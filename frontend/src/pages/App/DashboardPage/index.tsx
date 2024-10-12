import AppLayout from "../../../layouts/AppLayout";
import "./index.css";

const DashboardPage = () => {
  return (
    <AppLayout>
      <div className="box box1">Content 1</div>
      <div className="box-container">
        <div className="box box2">Content 2</div>
        <div className="box box2">Content 3</div>
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
