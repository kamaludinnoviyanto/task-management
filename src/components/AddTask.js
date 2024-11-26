import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddClick = () => {
    if (taskName) {
      onAddTask(taskName);
      setTaskName(''); // Clear input field after adding task
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={taskName} 
        onChange={handleInputChange} 
        placeholder="Enter task name" 
      />
      <button onClick={handleAddClick}>Add Task</button>
    </div>
  );
};

export default AddTask;