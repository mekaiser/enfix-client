import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [imageURL, setImageURL] = useState();

  const onSubmit = (data) => {
    const serviceData = {
      name: data.serviceName,
      id: data.serviceId,
      price: data.servicePrice,
      details: data.serviceDetails,
      imageURL: imageURL,
    };
    const url = `http://localhost:5000/addService`;

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "d0474fc409005ade448549f9e3a65fec");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
      });
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
              Service Name
            </label>
            <input
              type="text"
              name="serviceName"
              {...register("serviceName", { required: true })}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label
                for="exampleInputEmail1"
                className="form-label contact-form-label text-white"
              >
                Service ID
              </label>
              <input
                type="text"
                name="serviceId"
                {...register("serviceId", { required: true })}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label
                for="exampleInputEmail1"
                className="form-label contact-form-label text-white"
              >
                Service Price
              </label>
              <input
                type="text"
                name="servicePrice"
                {...register("servicePrice", { required: true })}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label
            for="exampleInputPassword1"
            className="form-label contact-form-label text-white"
          >
            Service Details
          </label>
          <input
            style={{ height: "200px" }}
            type="text"
            name="serviceDetails"
            {...register("serviceDetails", { required: true })}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleInputEmail1"
            className="form-label contact-form-label text-white"
          >
            Image
          </label>
          <input
            type="file"
            name="file"
            {...register("file", { required: true })}
            className="form-control"
            onChange={handleImageUpload}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-services-card my-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddService;
