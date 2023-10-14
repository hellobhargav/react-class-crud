import React from "react";

const Batches = () => {
  return (
    <div className="container" id="batches">
      <h1 className="text-center">
        Upcoming <span className="text-danger">Batches</span>
      </h1>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Course</th>
              <th>Date</th>
              <th>Timings</th>
              <th>Duration</th>
              <th>Trainer</th>
              <th>Register for Demo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Python Fullstack Development</td>
              <td>2-OCT-2023</td>
              <td>4:00 PM - 5:00 PM</td>
              <td>90 Days</td>
              <td>Mr. Sudheer</td>
              <td>
                <a href="https://hyderabadittrainings.com/python-fullstack-developer-course-hyderabad.php">
                  Register Now
                </a>
              </td>
            </tr>
            <tr>
              <td>MERN Stack Development</td>
              <td>6-OCT-2023</td>
              <td>5:00 PM - 6:00 PM</td>
              <td>90 Days</td>
              <td>Mr.Chandrashekar</td>
              <td>
                <a href="https://hyderabadittrainings.com/mern-fullstack-developer-course-hyderabad.php">
                  Register Now
                </a>
              </td>
            </tr>
            <tr>
              <td>DJango</td>
              <td>6-OCT-2023</td>
              <td>5:00 PM - 6:00 PM</td>
              <td>25 Days</td>
              <td>Mr. Sudheer</td>
              <td>
                <a href="https://hyderabadittrainings.com/python-django-training-hyderabad.php">
                  Register Now
                </a>
              </td>
            </tr>
            <tr>
              <td>UIUX Designing</td>
              <td>3-OCT-2023</td>
              <td>11:00 AM - 12: 00 PM</td>
              <td>90 Days</td>
              <td>Mr.shakthivel</td>
              <td>
                <a href="https://hyderabadittrainings.com/ui-ux-designing-course-hyderabad.php">
                  Register Now
                </a>
              </td>
            </tr>
            <tr>
              <td>UI Development</td>
              <td>6-OCT-2023</td>
              <td>5:00 PM - 6:00 PM</td>
              <td>70 Days</td>
              <td>Mr.Bharghav</td>
              <td>
                <a href="https://hyderabadittrainings.com/ui-developer-course-hyderabad.php">
                  Register Now
                </a>
              </td>
            </tr>
            <tr>
              <td>Python with DJango</td>
              <td>4-OCT-2023</td>
              <td>6:00 PM - 7:00 PM</td>
              <td>45 Days</td>
              <td>Mr. Sudheer</td>
              <td>
                <a href="https://hyderabadittrainings.com/python-training-hyderabad.php">
                  Register Now
                </a>
              </td>
            </tr>
            <tr>
              <td>Web Designing</td>
              <td>4-OCT-2023</td>
              <td>5:00 PM - 6:00 PM</td>
              <td>45 Days</td>
              <td>Mr.Bharghav</td>
              <td>
                <a href="https://hyderabadittrainings.com/web-designing-course-hyderabad.php">
                  Register Now
                </a>
              </td>
            </tr>
            <tr>
              <td>React JS</td>
              <td>6-OCT-2023</td>
              <td>9:00 AM - 10:00 AM</td>
              <td>25 Days</td>
              <td>Mr.Bharghav</td>
              <td>
                <a href="https://hyderabadittrainings.com/reactjs-training-hyderabad.php">
                  Register Now
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Batches;
