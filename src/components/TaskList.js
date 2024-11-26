import React, { useState } from 'react';

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskName, setEditTaskName] = useState('');

  const handleEditClick = (task) => {
    setEditTaskId(task.id);
    setEditTaskName(task.name);
  };

  const handleSaveClick = () => {
    onEditTask(editTaskId, editTaskName);
    setEditTaskId(null);
    setEditTaskName('');
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between items-center p-4 bg-white shadow-md rounded-md"
        >
          {editTaskId === task.id ? (
            <input
              type="text"
              value={editTaskName}
              onChange={(e) => setEditTaskName(e.target.value)}
              className="border rounded-md px-2 py-1 w-full mr-2"
            />
          ) : (
            <span className="text-lg">{task.name}</span>
          )}

          {editTaskId === task.id ? (
            <button
              onClick={handleSaveClick}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditClick(task)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;