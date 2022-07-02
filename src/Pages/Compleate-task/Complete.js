import { useEffect, useState } from "react";

const Complete = () => {
  const [completeTasks, setCompleteTasks] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-tor-58361.herokuapp.com/allCompleteTask")
      .then((res) => res.json())
      .then((data) => setCompleteTasks(data));
  }, []);
  return (
    <div className="vhHeight">
         <h2 className="toolsTasks taskTitles">My Complete Tasks</h2>
      <div className="allTasks-container px-5">
        {completeTasks.map((task) => (
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

export default Complete;
