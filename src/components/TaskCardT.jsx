import { Link } from "react-router-dom";
const TaskCardT = ({ task, setTasks }) => {
  const { id, title, description, completed } = task;
  const handleToggle = () => {
    setTasks((p) =>
      p.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };
  const handleDelete = () => {
    setTasks((p) => p.filter((t) => t.id !== id));
  };
  return (
    <div className="bg-white p-6 flex flex-col gap-4 items-start rounded-2xl">
      <h1 className="font-bold text-xl ">{title}</h1>
      <div
        className={
          completed
            ? "bg-green-100 py-2 px-3  rounded-full text-green-600"
            : "bg-orange-100 py-2 px-3 rounded-full text-orange-600"
        }
      >
        <h3 className="font-semibold">{completed ? "Completed" : "Pending"}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
      <div className="flex justify-between items-center w-full mt-2">
        <Link
          to={`/tasks/${id}`}
          className="p-2 bg-indigo-100 text-indigo-600 rounded-2xl font-semibold"
        >
          View Details
        </Link>
        <button
          className={
            !completed
              ? "p-2 bg-indigo-600 text-white rounded-2xl font-semibold cursor-pointer"
              : "p-2 bg-orange-100 text-orange-600 rounded-2xl font-semibold cursor-pointer"
          }
          onClick={handleToggle}
        >
          {completed ? "Pende" : "Complete"}
        </button>
        <button
          className="p-2 bg-red-100 text-red-500 rounded-2xl font-semibold cursor-pointer"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCardT;
