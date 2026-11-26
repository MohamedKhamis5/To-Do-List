import { useState } from "react";
import DashHead from "./DashHead";

const AddTask = (props) => {
  const [tit, setTit] = useState("");
  const [des, setDes] = useState("");
  const handleCancel = (e) => {
    e.preventDefault();
    setTit("");
    setDes("");
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (!tit.trim()) return;
    const newTask = {
      id: Math.random() * 100,
      title: tit,
      description: des,
      completed: false,
    };
    const updatedTasks = [...props.tasks, newTask];

    props.setTasks(updatedTasks);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTit("");
    setDes("");
  };
  return (
    <div className="bg-slate-50 min-h-screen p-4">
      <DashHead
        head={"Add New Task"}
        quote={"Create a task and keep your work organized."}
      />
      <div className="w-[90%] md:[70%]  bg-white border border-slate-100 rounded-2xl shadow-sm mx-auto mt-8 p-8 flex flex-col gap-6">
        <h1 className="text-xl font-bold text-slate-800 tracking-tight">
          Task information
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="tit" className="text-sm font-bold text-slate-800">
              Task title
            </label>
            <input
              id="tit"
              type="text"
              onChange={(e) => setTit(e.target.value)}
              value={tit}
              placeholder="Enter task title"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="des" className="text-sm font-bold text-slate-800">
              Description
            </label>
            <textarea
              id="des"
              rows={4}
              onChange={(e) => setDes(e.target.value)}
              value={des}
              placeholder="Describe what needs to be done..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
            />
          </div>
        </div>
        <p className="text-xs text-slate-400">
          Tip: A clear title makes tasks easier to find.
        </p>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-colors cursor-pointer"
            onClick={handleSave}
          >
            Save Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
