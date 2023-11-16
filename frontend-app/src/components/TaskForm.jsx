/* eslint-disable react/prop-types */
// src/App.js
import { useState } from "react";

const TaskForm = ({ onSubmit, taskToEdit }) => {
  const [editedTask, setEditedTask] = useState(taskToEdit || {
    description: '',
    dueDate: '',
    status: 'Pendiente',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedTask);
    setEditedTask({
      description: '',
      dueDate: '',
      status: 'Pendiente',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Descripción
    </label>
    <input
      type="text"
      name="description"
      value={editedTask.description}
      onChange={handleChange}
      className="w-full border border-gray-300 p-2 mb-2"
      required
    />

    <label className="block text-sm font-medium text-gray-700 mb-1">
      Fecha de vencimiento
    </label>
    <input
      type="date"
      name="dueDate"
      value={editedTask.dueDate}
      onChange={handleChange}
      className="w-full border border-gray-300 p-2 mb-2"
      required
    />

    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {taskToEdit ? 'Editar Tarea' : 'Agregar Tarea'}
    </button>
  </form>
  );
};

export default TaskForm;
