import { Link } from "react-router-dom";
import "../components/Task.css";
import { useState } from "react";

/* eslint-disable react/prop-types */
const Task = ({ task, handleDelete }) => {
  const [completed, setcompleted] = useState(false);
  return (
    <div className="task">
      <div className="tleft">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Status: {completed ? "Completed" : "Pending"}</p>
        <h5>Created at: {new Date(task.createdAt).toLocaleString()}</h5>
      </div>
      <div className="Tright">
        <div className="z-btn">
        <Link className="e-btn" to={`/edit/${task._id}`}>
          Edit
        </Link>
        <button className="d-btn" onClick={() => handleDelete(task._id)}>
          Delete
        </button>
        </div>
        <div>
          <button  className="c-btn" style={{ backgroundColor: completed ? "blue" : "orange" }} onClick={() => setcompleted(!completed)}>
            Mark as {completed ? "Pending" : "Completed"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
