import styled from "styled-components";
import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <Cont>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </Cont>
  );
}

export default TaskCard;

const Cont = styled.div`
  background: #0d7373;
  box-shadow: 0px 0px 6px #fff;
  word-wrap: break-word;
  margin: 10px;
  border-radius: 10px;
  padding: 0 15px;
  max-width: 275px;
  height: auto;
  text-align: center;

  h1,
  p {
    color: #fff;
  }
  button {
    background: orange;
    width: auto;
    height: auto;
    padding: 5px 25px;
    border-radius: 0.5em;
    font-size: 0.95em;
  }
  button:hover {
    background: #000;
  }
`;
