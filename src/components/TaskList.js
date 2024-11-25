import React, { useState } from 'react';

// Komponen untuk menampilkan daftar tugas
const TaskList = () => {
  // State untuk menyimpan daftar tugas
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Fungsi untuk menambahkan tugas baru
  const addTask = () => {
    if (taskInput !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput(""); // Clear input setelah menambahkan tugas
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      {/* Input untuk menambah tugas */}
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>

      {/* Daftar tugas */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;