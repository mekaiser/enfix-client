import React from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const reviewData = {
      name: data.name,
      position: data.position,
      review: data.review,
    };
    const url = `https://glacial-inlet-47759.herokuapp.com/addReview`;

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
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
              Full Name
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3">
            <label
              for="exampleInputEmail1"
              className="form-label contact-form-label text-white"
            >
              Company And Designation
            </label>
            <input
              type="text"
              name="position"
              {...register("position", { required: true })}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <div className="mb-3">
          <label
            for="exampleInputPassword1"
            className="form-label contact-form-label text-white"
          >
            Review
          </label>
          <input
            style={{ height: "200px" }}
            type="text"
            name="review"
            {...register("review", { required: true })}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-services-card my-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Review;
