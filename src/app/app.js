import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");
    const [newTask, setNewTask] = useState("");
  
    const addTask = (e) => {
      if (e.key === "Enter" && newTask.trim()) {
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask("");
      }
    };
  
    const toggleTask = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      setTasks(updatedTasks);
    };
  
    const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
    };
  
    const filteredTasks = tasks.filter((task) => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    });
  
    return (
      <div className="container mt-5" style={{ maxWidth: "1000px", backgroundColor: "" }}>
        <h2 className="text-center ">THINGS TO DO</h2>
        <input

          type="text"
          className="form-control mb-3"
          placeholder="Add New"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={addTask}
        />
        <ul className="list-group">
          {filteredTasks.map((task, index) => (
            <li key={index} className="list-group-item d-flex align-items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)}
                className="me-2"
              />
              <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.text}
              </span>
              <button
                className="btn btn-sm btn-danger ms-auto"
                onClick={() => deleteTask(index)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-3 d-flex justify-content-between align-items-center bg-light p-2">
          <span>{tasks.length} items left</span>
          <div>
            <button className="btn btn-sm btn-outline-primary me-2" onClick={() => setFilter("all")}>
              All
            </button>
            <button className="btn btn-sm btn-outline-primary me-2" onClick={() => setFilter("active")}>
              Active
            </button>
            <button className="btn btn-sm btn-outline-primary" onClick={() => setFilter("completed")}>
              Completed
            </button>
          </div>
        </div>
      </div>
    );
  }
  