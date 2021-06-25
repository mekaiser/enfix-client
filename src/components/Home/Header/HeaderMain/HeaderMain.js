import React from "react";
import repairMan from "../../../../images/repair-man.png";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <div className="row header-main-focus-container">
      <div className="col-md-8">
        <h1
          style={{ fontWeight: "700" }}
          className="text-white  header-main-focus-text"
        >
          Excellent Services For Repairing Your{" "}
          <span className="header-main-focus-text-span">Broken Gadget</span>
        </h1>
        <button type="button" className="btn btn-custom">
          Get Started
        </button>
      </div>
      <div className="col-md-4 text-center">
        <img className="repairman-img" src={repairMan} alt="" />
      </div>
    </div>
  );
};

export default HeaderMain;
