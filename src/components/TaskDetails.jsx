import { Link, useParams } from "react-router-dom";
import DashHead from "./DashHead";

const TaskDetails = ({ tasks }) => {
  const { id } = useParams();

  const task = tasks?.find((t) => String(t.id) === String(id));
  if (!task) {
    return (
      <div className="bg-slate-50 min-h-screen p-4">
        <DashHead
          head={"Task Details"}
          quote={"Review information and status of a task"}
        />
        <div className="w-[70%] bg-white border border-slate-200 rounded-2xl shadow-sm mx-auto mt-8 p-10 flex flex-col items-center gap-4 text-center">
          <h1 className="text-xl font-bold text-slate-800">Task Not Found!</h1>
          <Link
            to="/tasks"
            className="px-6 py-2.5 bg-indigo-100 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-200 transition-colors"
          >
            Back to Tasks
          </Link>
        </div>
      </div>
    );
  }


  return (
    <div className="bg-slate-50 min-h-screen p-4">
      <DashHead
        head={"Task Details"}
        quote={"Review information and status of a task"}
      />

      <div className="w-[70%] bg-white border border-slate-200 rounded-2xl shadow-sm mx-auto mt-8 p-10 flex flex-col gap-8">

        <h1 className="text-3xl font-bold text-slate-800">
          {task.title}
        </h1>

  
        <div
          className={
            task.completed
              ? "bg-green-100 py-2 px-5 rounded-full text-green-600 w-fit"
              : "bg-orange-100 py-2 px-5 rounded-full text-orange-600 w-fit"
          }
        >
          <h3 className="font-semibold">
            {task.completed ? "Completed" : "Pending"}
          </h3>
        </div>

        
        <div className="flex flex-col gap-3 mt-4">
          <h3 className="text-sm font-bold text-slate-500">
            Description
          </h3>

          <p className="text-slate-800">
            {task.description || "No description available"}
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <h3 className="text-sm font-bold text-slate-500">
            Task ID
          </h3>

          <p className="text-slate-800">{task.id}</p>
        </div>

 
        <div className="flex justify-between items-center mt-8">

          <Link
            to="/tasks"
            className="px-8 py-3 bg-indigo-100 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-200 transition-colors"
          >
            Back to Tasks
          </Link>

          

        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
