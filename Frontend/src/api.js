import Axios from "axios";

const API_URL = "https://task-man-backserver.vercel.app";
export const getTasks = () => Axios.get(`${API_URL}/tasks`);
export const createTask = (task) => Axios.post(`${API_URL}/tasks`, task);
export const updateTask = (id, updatedtask) =>
  Axios.put(`${API_URL}/tasks/${id}`, updatedtask);
export const deleteTask = (id) => Axios.delete(`${API_URL}/tasks/${id}`);
