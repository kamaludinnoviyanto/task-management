import React from "react";
import { motion } from "framer-motion";

function TaskList({ tasks, onDelete, onEdit }) {
    return (
        <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="task-list"
        >
            {tasks.map((task, index) => (
                <motion.li
                    key={task.id}  // Menggunakan `task.id` agar lebih unik
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    exit={{ x: 100 }}
                    className="task-list-item flex justify-between items-center p-4 bg-white rounded-lg shadow-sm mb-2"
                >
                    <div className="task-details flex-grow">
                        <h3 className="text-xl font-semibold">Judul : {task.title}</h3>
                        <p>Deskripsi Tugas : {task.description}</p>
                    </div>
                    <div className="task-actions flex items-center space-x-4">
                        <button
                            onClick={() => onEdit(index)}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(index)}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    );
}

export default TaskList;
