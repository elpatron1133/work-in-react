import styled from "styled-components";
import { useState, useContext } from "react";
import { TaskContext } from "./context/TaskContext";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  function titulo(e) {
    setTitle(e.target.value);
  }
  function descriptionTask(e) {
    setDescription(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <ContentForm>
      <form onSubmit={handleSubmit}>
        <input
          onChange={titulo}
          type="text"
          placeholder="Escribe tu tarea"
          value={title}
          autoFocus
        />
        <textarea
          onChange={descriptionTask}
          placeholder="escribe la descripcion"
          value={description}
        ></textarea>
        <button>Guardar</button>
      </form>
    </ContentForm>
  );
}

const ContentForm = styled.div`
  textarea::placeholder,
  input::placeholder {
    color: #0d7373;
  }
  button {
    background: #000;
    height: 4em;
    width: 8em;
    font-size: 1em;
    margin: 15px auto;
  }
  h1 {
    color: red;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input,
  textarea {
    text-align: center;
    margin: 5px;
    background: #84dfdf;
    color: #fff;
    font-weight: bold;
    border-radius: 15px;
  }
`;
