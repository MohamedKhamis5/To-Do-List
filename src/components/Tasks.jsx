import DashHead from "./DashHead";
import TaskCardT from "./TaskCardT";
import { Link } from "react-router-dom";
const Tasks = ({ tasks, setTasks }) => {
  if (tasks.length > 0) {
    return (
      <div className="bg-slate-50 min-h-screen p-4">
        <DashHead
          head={"My Tasks"}
          quote={"Manage your tasks and track your progress."}
        />
        <div className="grid md:grid-cols-1 w-full gap-5 mt-8 lg:grid-cols-2">
          {tasks.map((task) => (
            <TaskCardT key={task.id} task={task} setTasks={setTasks} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-slate-50 min-h-screen p-4">
        <DashHead
          head={"My Tasks"}
          quote={"Manage your tasks and track your progress."}
        />
        <div className="flex flex-col justify-center items-center w-full max-w-md mx-auto mt-20 bg-white p-10 rounded-2xl shadow-lg border border-slate-100 gap-5 text-center">
          <h1 className="text-xl font-bold text-slate-700">No Tasks Yet</h1>

          <p className="text-slate-500 text-sm">
            You don't have any tasks. Start by adding your first task.
          </p>

          <Link
            to={"/add-task"}
            className="p-3 px-6 bg-indigo-500 hover:bg-indigo-600 transition duration-300 rounded-xl text-white font-semibold shadow-md"
          >
            + Add Task
          </Link>
        </div>
      </div>
    );
  }
};

export default Tasks;
