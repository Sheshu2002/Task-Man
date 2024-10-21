import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api";
import Task from "../components/Task";
import Popup from "../containers/popup";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await getTasks();
      setTasks(data);
      
      // setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <div className="nav">
        <h1 className="heading">Task Manager</h1>
      </div>
      {tasks.map((task) => (
        <Task key={task._id} task={task} handleDelete={handleDelete} />
      ))}
      <Popup tasks={tasks} />
    </div>
  );
};

export default TaskList;
