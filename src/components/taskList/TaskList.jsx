import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";
import styled from "styled-components";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1>NO hay nada que hacer</h1>;
  }

  return (
    <DivContendor>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </DivContendor>
  );
}

export default TaskList;

const DivContendor = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
