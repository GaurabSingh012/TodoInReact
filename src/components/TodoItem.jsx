import React, { useState } from "react";
import { useTodo } from "../context";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleComplete = () => {
    toggleTodo(todo.id);
  };

  return (
    <div
      className={`flex items-center gap-2 p-2 rounded ${
        todo.completed ? "bg-amber-200" : "bg-amber-300"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleComplete}
      />

      <input
        type="text"
        className={`border rounded px-1 bg-transparent ${
          isTodoEditable ? "border-black/20" : "border-transparent"
        } ${todo.completed ? "line-through text-gray-500" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <button
        className="text-sm px-2"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) editTodo();
          else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "Save" : "Edit"}
      </button>

      <button
        className="text-sm text-red-600 px-2"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
