import React, { useState } from "react";
import AddService from "../AddService/AddService";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageServices from "../ManageServices/ManageServices";
import OrderList from "../OrderList/OrderList";
import "./DashboardAdmin.css";

const DashboardAdmin = () => {
  const [orderList, setOrderList] = useState(false);
  const [addService, setAddService] = useState(false);
  const [makeAdmin, setMakeAdmin] = useState(false);
  const [manageServices, setManageServices] = useState(false);

  const handleOrderList = () => {
    setOrderList(true);
    setAddService(false);
    setMakeAdmin(false);
    setManageServices(false);
  };
  const handleAddService = () => {
    setOrderList(false);
    setAddService(true);
    setMakeAdmin(false);
    setManageServices(false);
  };
  const handleMakeAdmin = () => {
    setOrderList(false);
    setAddService(false);
    setMakeAdmin(true);
    setManageServices(false);
  };
  const handleManageServices = () => {
    setOrderList(false);
    setAddService(false);
    setMakeAdmin(false);
    setManageServices(true);
  };
  return (
    <div className="row mt-5">
      <div className="col-md-3">
        <div className="dashboard-sidebar-style">
          <div>
            <button
              type="button"
              onClick={handleOrderList}
              className="btn dashboard-sidebar-btn text-white d-block"
            >
              Order List
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={handleAddService}
              className="btn dashboard-sidebar-btn text-white d-block"
            >
              Add Service
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={handleMakeAdmin}
              className="btn dashboard-sidebar-btn text-white d-block"
            >
              Make Admin
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={handleManageServices}
              className="btn dashboard-sidebar-btn text-white d-block"
            >
              Manage Services
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-9">
        {orderList && <OrderList></OrderList>}
        {addService && <AddService></AddService>}
        {makeAdmin && <MakeAdmin></MakeAdmin>}
        {manageServices && <ManageServices></ManageServices>}
      </div>
    </div>
  );
};

export default DashboardAdmin;
