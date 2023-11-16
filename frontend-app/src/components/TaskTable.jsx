/* eslint-disable react/prop-types */
function TaskTable({ tasks, onEdit, onComplete }) {
  return (
    <table className="w-full border-collapse border border-gray-200 mt-4 text-center">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-200 p-2">ID</th>
          <th className="border border-gray-200 p-2">Descripción</th>
          <th className="border border-gray-200 p-2">Fecha de vencimiento</th>
          <th className="border border-gray-200 p-2">Estado</th>
          <th className="border border-gray-200 p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id} className="border border-gray-200">
            <td className="border border-gray-200 p-2">{task.id}</td>
            <td className="border border-gray-200 p-2">{task.description}</td>
            <td className="border border-gray-200 p-2">{task.dueDate}</td>
            <td
              className={`border border-gray-200 p-2 rounded-m-full text-center  ${
                task.status === "Pendiente"
                  ? "text-orange-600"
                  : "text-green-600"
              }`}
            >
              {task.status}
            </td>
            <td className="border border-gray-200 p-2">
              {task.status === "Completado" ? (
                <button
                  disabled
                  className="bg-gray-500 text-white px-2 py-1 mr-2 rounded text-sm"
                >
                  Editar
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-800 text-sm"
                  onClick={() => onEdit(task.id)}
                >
                  Editar
                </button>
              )}

              {task.status === "Completado" ? (
                <button
                  disabled
                  className="bg-gray-500 text-white px-2 py-1 rounded text-sm"
                >
                  Completar
                </button>
              ) : (
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-800 text-sm"
                  onClick={() => onComplete(task.id)}
                >
                  Completar
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskTable;
