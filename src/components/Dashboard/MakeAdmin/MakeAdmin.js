import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const adminEmail = {
      adminEmail: data.email,
    };

    const url = `http://localhost:5000/addAdmin`;

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminEmail),
    })
      .then((res) => res.json())
      .then((data) => {});
  };
  return (
    <div className="dashboard-details-div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="mb-3">
            <label
              for="exampleInputEmail1"
              className="form-label contact-form-label text-white"
            >
              Admin Email
            </label>
            <input
              type="text"
              name="email"
              {...register("email", { required: true })}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-services-card my-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;
