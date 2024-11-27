import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import './index.css'; // Impor CSS di sini

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);  // Menyimpan index task yang diedit
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleAddTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now() }]);
    };

    const onDelete = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const onEdit = (index) => {
        setEditingIndex(index);  // Menyimpan task yang sedang diedit
        setNewTitle(tasks[index].title);
        setNewDescription(tasks[index].description);
    };

    const handleEditSubmit = () => {
        if (!newTitle || !newDescription) {
            alert("Judul dan deskripsi tidak boleh kosong!");
            return;
        }

        const updatedTasks = tasks.map((task, index) => {
            if (index === editingIndex) {
                return { ...task, title: newTitle, description: newDescription };
            }
            return task;
        });

        setTasks(updatedTasks);
        setEditingIndex(null);  // Reset setelah selesai edit
        setNewTitle('');
        setNewDescription('');
    };

    return (
        <div className="app-container">
            <header className="header">
                <h1 className="text-xl font-bold">Task Manager</h1>
            </header>
            <main>
                {editingIndex === null ? (
                    <AddTask onAdd={handleAddTask} />  // Tampilkan AddTask jika tidak dalam mode edit
                ) : (
                    <div className="edit-task-form p-6 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto mt-6">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Edit Task</h2>
                        <input
                            type="text"
                            placeholder="Judul Tugas"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="Deskripsi Tugas"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <div className="flex justify-center">
                            <button
                                onClick={handleEditSubmit}
                                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            >
                                Simpan Perubahan
                            </button>
                        </div>
                    </div>
                )}
                <TaskList tasks={tasks} onDelete={onDelete} onEdit={onEdit} />
            </main>
            <footer className="footer">
                <p>&copy; Kamal</p>
            </footer>
        </div>
    );
};

export default App;