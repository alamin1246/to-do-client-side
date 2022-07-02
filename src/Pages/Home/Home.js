import { useRef } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import swal from "sweetalert";
import TaskList from "./TaskList";
const Home = () => {
  const form = useRef(null);
  const addTask = (e) => {
    e.preventDefault();
    const taskName = e.target.tName.value;
    const taskDetails = e.target.details.value;
    fetch("https://mysterious-tor-58361.herokuapp.com/addTask", {
      method: "POST",
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
            title: "Add Task Successfully!!",
            icon: "success",
            button: "OK!",
          });
        }
        form.current.reset();
      });
  };
  return (
    <div className="home-container vhHeight">
      <h2 className="toolsTasks">Add Your Task</h2>

      <form className="home-info" ref={form} onSubmit={addTask}>
        <label>Your Task Name</label>
        <input type="text" name="tName" required />
        <label>Your Task Details</label>
        <input className="details-info" type="text" name="details" required />
        <button type="submit" className="arrow">
          <FaArrowCircleRight />
        </button>
      </form>
      <h2 className="toolsTasks taskTitles">Your Task List</h2>
      <TaskList />
    </div>
  );
};

export default Home;
