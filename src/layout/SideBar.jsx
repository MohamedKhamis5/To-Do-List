import { NavLink } from "react-router-dom";

const SideBar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center justify-center md:justify-start gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
      isActive
        ? "bg-indigo-600 text-white shadow-sm"
        : "text-slate-400 hover:text-white hover:bg-slate-800"
    }`;

  return (
    <aside className="bg-slate-900 w-full md:w-64 shrink-0 md:min-h-screen border-b md:border-b-0 md:border-r border-slate-800 flex flex-col justify-between p-3 md:p-4 gap-3 md:gap-0">
      <div className="side-top flex items-center justify-between md:justify-center w-full">
        <h1 className="text-white font-bold text-xl px-2 py-1 md:py-4">
          TaskFlow
        </h1>

        <div className="flex md:hidden items-center gap-2 p-1.5 bg-slate-800/40 rounded-lg border border-slate-800">
          <div className="w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-xs border border-indigo-500/30">
            M
          </div>
          <span className="text-xs font-semibold text-white">Mohamed</span>
        </div>
      </div>

      <div className="w-full md:my-auto flex flex-col gap-2">
        <p className="hidden md:block px-2 text-xs font-semibold tracking-wider text-slate-500 uppercase text-center">
          WORKSPACE
        </p>
        <nav className="flex flex-row md:flex-col gap-1.5 w-full justify-around md:justify-start">
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

      <div className="side-bottom hidden md:flex items-center gap-3 w-full p-3 bg-slate-800/40 rounded-xl border border-slate-800">
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
    </aside>
  );
};

export default SideBar;
