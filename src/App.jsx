import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import SideBar from "./layout/SideBar";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import NotFound from "./components/NotFound";
const App = () => {
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");

  return savedTasks ? JSON.parse(savedTasks) : [];
});

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        <SideBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard tasks={tasks} />} />
            <Route
              path="/tasks"
              element={<Tasks tasks={tasks} setTasks={setTasks} />}
            />
            <Route path="/add-task" element={<AddTask tasks={tasks} setTasks={setTasks} />} />
            <Route path="/tasks/:id" element={<TaskDetails tasks={tasks} setTasks={setTasks} />} />
            <Route path="/view-details/:id" element={<TaskDetails tasks={tasks} setTasks={setTasks} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
