import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddClick = () => {
        if (!title || !description) {
            alert("Judul dan deskripsi tidak boleh kosong!");
            return;
        }
        // Mengirim data tugas ke App melalui onAdd
        onAdd({ title, description });
        setTitle("");  // Reset input title setelah add
        setDescription("");  // Reset input description setelah add
    };

    return (
        <div className="add-task">
            <input
                type="text"
                placeholder="Judul Tugas"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Deskripsi Tugas"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button onClick={handleAddClick}>Tambah Tugas</button>
        </div>
    );
};

export default AddTask;
