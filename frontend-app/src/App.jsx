import TaskTable from "./components/TaskTable";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import { fetchTasks, createTask, updateTask } from "./reducers/tasksSlice";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleEdit = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    setTaskToEdit(task);
    setShowForm(true);
  };

  const handleComplete = (taskId) => {
    dispatch(
      updateTask({
        ...tasks.find((task) => task.id === taskId),
        status: "Completado",
      })
    );
  };

  const handleAddTask = () => {
    setTaskToEdit(null);
    setShowForm(true);
  };

  const handleFormSubmit = (task) => {
    if (taskToEdit) {
      dispatch(updateTask(task));
    } else {
      dispatch(createTask(task));
    }

    setShowForm(false);
    setTaskToEdit(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Lista de tareas</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded float-right mb-4 hover:bg-blue-800"
        onClick={handleAddTask}
      >
        Agregar tarea
      </button>

      <TaskTable
        tasks={tasks}
        onEdit={handleEdit}
        onComplete={handleComplete}
      />

      {showForm && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 pointer-events-none" />
          <TaskForm
            onCancel={() => setShowForm(false)}
            onSubmit={handleFormSubmit}
            taskToEdit={taskToEdit}
          />
        </>
      )}
    </div>
  );
}

export default App;
