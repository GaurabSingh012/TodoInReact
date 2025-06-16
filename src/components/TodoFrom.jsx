import { useState } from "react";
import { useTodo } from "../context";

const TodoFrom = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex items-center gap-2 mb-4">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Write your Todo..."
        className="border px-2 py-1 rounded w-full"
      />
      <button type="submit" className="bg-black text-white px-3 py-1 rounded">Add</button>
    </form>
  );
};

export default TodoFrom;
