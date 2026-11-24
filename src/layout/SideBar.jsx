import { NavLink } from "react-router-dom";

const SideBar = () => {
  const linkClass = ({ isActive }) =>
    `w-full flex items-center gap-3 px-4 py-6 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? "bg-indigo-600 text-white shadow-sm"
        : "text-slate-400 hover:text-white hover:bg-slate-800"
    }`;

  return (
    <>
      <div className="bg-slate-900 w-64 shrink-0 min-h-screen border-r border-slate-800 flex flex-col justify-between p-4">
        <div className="side-top w-full text-center ">
          <h1 className="text-white font-bold text-xl px-2 py-4">TaskFlow</h1>
        </div>

        <div className="w-full my-auto flex flex-col gap-2">
          <p className="px-2 text-xs font-semibold tracking-wider text-slate-500 uppercase text-center">
            WORKSPACE
          </p>
          <nav className="flex flex-col gap-1.5 w-full ">
            <NavLink to="/" className={linkClass}>
              Dashboard
            </NavLink>
            <NavLink to="/tasks" className={linkClass}>
              My Tasks
            </NavLink>
            <NavLink to="/add-task" className={linkClass}>
              + Add Task
            </NavLink>
          </nav>
        </div>

        
        <div className="side-bottom flex items-center gap-3 w-full p-3 bg-slate-800/40 rounded-xl border border-slate-800">
          <div className="logo w-9 h-9 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-sm border border-indigo-500/30">
            M
          </div>
          <div className="data flex flex-col">
            <h2 className="text-sm font-semibold text-white leading-tight">
              Mohamed Khamis
            </h2>
            <p className="text-xs text-slate-400">Student Account</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;