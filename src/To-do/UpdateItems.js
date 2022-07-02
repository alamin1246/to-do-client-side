import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
const UpdateItems = () => {
  const [update, setUpdate] = useState({});
  const { toId } = useParams();
  useEffect(() => {
    const url = `https://apologetic-marks-83647.herokuapp.com/allTask/${toId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  }, [toId]);

  const updateTask = (e) => {
    e.preventDefault();
    const taskName = e.target.tName.value;
    const taskDetails = e.target.details.value;

    fetch(`https://apologetic-marks-83647.herokuapp.com/allTask/${toId}`, {
      method: "PUT",
      body: JSON.stringify({
        name: taskName,
        details: taskDetails,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          swal({
            title: "Update Task Successfully!!",
            icon: "success",
            button: "OK!",
          });
        }
      });
  };
  return (
    <div className="vhHeight">
      <div className="all-task-info">
        <div className="taskTitle">Name: {update.name}</div>
        <hr />
        <div className="taskDetails">Details: {update.details}</div>
      </div>

      <h2 className="toolsTasks taskTitles">Update Your Task</h2>
      <form className="home-info" onSubmit={updateTask}>
        <label>Update Task Name</label>
        <input type="text" name="tName" placeholder="Enter Task Name" />
        <label>Update Task Details</label>
        <input
          className="details-info"
          type="text"
          name="details"
          placeholder="Enter Task Details"
          required
        />
        <button type="submit" className="arrow">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateItems;
