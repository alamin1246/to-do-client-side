import { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
const UpdateItems = () => {
  const [update, setUpdate] = useState({});
  const { toId } = useParams();
  useEffect(() => {
    const url = `https://mysterious-tor-58361.herokuapp.com/allTask/${toId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  }, [toId]);

  const updateTask = (e) => {
    e.preventDefault();
    const taskName = e.target.tName.value;
    const taskDetails = e.target.details.value;

    fetch(`https://mysterious-tor-58361.herokuapp.com/allTask/${toId}`, {
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
        <input type="text" name="tName" />
        <label>Update Task Details</label>
        <input className="details-info" type="text" name="details" required />
        <button type="submit" className="arrow">
          <FaArrowCircleRight />
        </button>
      </form>
    </div>
  );
};

export default UpdateItems;
