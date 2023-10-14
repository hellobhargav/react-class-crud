import React from "react";
import about_img from "./about.png";
import { Button } from "react-bootstrap";

const About = () => {
  return (
    <div className="container" id="about">
      <div className="row pt-5">
        <h1 className="text-center">
          About <span className="text-danger">HIT</span>
        </h1>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 p-5">
          <h3>
            Welcome to <span>Hyderabad IT Trainings</span>{" "}
          </h3>
          <p>
            Hyderabad IT Trainings is a Hyderabad based Training Institute
            delivering classroom and online trainings in India, USA and UK,
            Australia. We are Providing high quality training is our core value.
            We offer both classroom and online training on niche technologies
            which are in high demand. All our trainers are IT professionals with
            rich experience.{" "}
          </p>
          <p>
            Hyderabad IT Trainings is a leading training and placement company
            in hyderabad managed by industry experts with more than 9+ years of
            experience in leading MNC Companies. We are wellknown for our
            practical approach towards training that enables students to gain
            realtime exposure.
          </p>
          <p>
            Hyderabad IT Trainings is a one-stop shop for IT courses, Web
            Development services & Recruitment services. Hyderabad IT Trainings
            concentrates on its vision of building up strong client and business
            partnerships. To this end, Hyderabad IT Trainings offers Real-time
            and placement focuses training services.
          </p>
          <button className="btn btn-primary mx-4">Read More</button>
          <Button variant="success">Know More</Button>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 p-5 d-flex justify-content-center align-items-center">
          <img src={about_img} alt="" className="img-fluid"/>
        </div>
      </div>
    </div>
  );
};

export default About; 
