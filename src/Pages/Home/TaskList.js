import { useEffect, useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-tor-58361.herokuapp.com/allTask")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div>
      <div className="allTasks-container px-5">
        {tasks.map((task) => (
          <div className="all-task-info">
            <div className="taskTitle">Name: {task.name}</div>
            <hr />
            <div className="taskDetails">Details: {task.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
