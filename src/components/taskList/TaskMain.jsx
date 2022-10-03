import TaskList from "./TaskList";
import { TaskForm } from "./TaskForm";
import { TaskContextProvider } from "./context/TaskContext";

function TaskMain() {
  return (
    <TaskContextProvider>
       <TaskList />
        <TaskForm  />
    </TaskContextProvider>
  );
}

export default TaskMain;



