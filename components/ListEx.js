import React from "react";

const ListEx = () => {
  const Batches = [
    {
      id: 1,
      course: "React JS",
      duration: "30 Days",
      startDate: "28-Sep-2023",
      trainer: "Mr Bhargav",
    },
    {
      id: 2,
      course: "UI Development",
      duration: "90 Days",
      startDate: "28-Sep-2023",
      trainer: "Mr Bhargav",
    },
    {
      id: 3,
      course: "UI UX Designing",
      duration: "75 Days",
      startDate: "28-Sep-2023",
      trainer: "Mr Sakthivel",
    },
    {
      id: 4,
      course: "UI UX Designing",
      duration: "75 Days",
      startDate: "30-Sep-2023",
      trainer: "Mr Sakthivel",
    },
    {
      id: 5,
      course: "React JS",
      duration: "30 Days",
      startDate: "10-Oct-2023",
      trainer: "Mr Bhargav",
    },
  ];
  return (
    <div>
      <h1>Upcoming Batches</h1>
      <table>
        <thead>
          <tr>
            <th>Batch No</th>
            <th>Course</th>
            <th>Duration</th>
            <th>Start Date</th>
            
          </tr>
        </thead>
        <tbody>
          {Batches.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.course}</td>
                <td>{data.duration}</td>
                <td>{data.startDate}</td>
              
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListEx;
