import DashboardAdmin from "../DashboardAdmin/DashboardAdmin";
import DashboardUser from "../DashboardUser/DashboardUser";

const DashboardChecker = ({adminLoggedIn, serviceId }) => {
  return (
    <>
      {adminLoggedIn ? (
        <DashboardAdmin></DashboardAdmin>
      ) : (
        <DashboardUser serviceId={serviceId}></DashboardUser>
      )}
    </>
  );
};

export default DashboardChecker;