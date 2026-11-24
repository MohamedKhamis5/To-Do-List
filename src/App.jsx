import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import SideBar from "./layout/SideBar";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import NotFound from "./components/NotFound";
const App = () => {
  const initialTasks = [
    {
      id: 1,
      title: "Learn React",
      description: "Study React components and JSX",
      completed: false,
    },
    {
      id: 2,
      title: "Learn useState",
      description: "Practice state management",
      completed: true,
    },
    {
      id: 3,
      title: "Learn React Router",
      description: "Practice navigation between pages",
      completed: false,
    },
    {
      id: 4,
      title: "Build React Project",
      description: "Create a complete React application",
      completed: false,
    },
  ];
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <>
      <div className="flex">
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
