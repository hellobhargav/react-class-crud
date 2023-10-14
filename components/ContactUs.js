import React from "react";

const ContactUs = () => {
  return (
    <main>
      <div className="container" id="contact">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 p-5">
            <h1 className="text-center">Reach Us</h1>
            <form>
              <input type="text" placeholder="Enter Your Name" />

              <input type="email" placeholder="Email ID" />

              <input type="tel" placeholder="Mobile Number" />

              <select required>
                <option value="" hidden>
                  Select your Course
                </option>
                <option value="uiux">UI UX Designing </option>
                <option value="ui">UI Development </option>
                <option value="mern">MERN Full Stack </option>
                <option value="react">React JS</option>
              </select>

              <textarea name="" id="" rows="3"></textarea>

              <input type="submit" className="btn btn-danger" />
            </form>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 p-5 d-flex justify-content-center align-items-center">
            <div className="content">
              <h3>Address</h3>
              <p>
                House No 40, Third Floor, Vittalrao Nagar, Madhapur, Hitech City
                Main Road, Hyderabad, Telangana- 081
              </p>

              <p>+91 81439 56849</p>
              <p>info@hyderabadittrainings.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <iframe
        title="Map Intigration"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243604.77461595088!2d78.384686!3d17.444171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91065c1d3e53%3A0x2d84d6e311a69e21!2sHyderabad%20IT%20Trainings%20-%20Core%20Java%20Advanced%20Java%20%7C%20Java%20Fullstack%20Python%20Fullstack%20%7C%20MERN%20Fullstack%20%7C%20React%20JS%20%7C%20UI%20UX%20Design!5e0!3m2!1sen!2sin!4v1696309916554!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
};

export default ContactUs;
