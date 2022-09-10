import {
  PlusIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";

interface TodoItem {
  name: string;
  isCompleted: boolean;
}

export const TodoApp = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodoName, setNewTodoName] = useState("");

  // Add a new todo
  const addTodo = (name: string) => {

    // Create a new TodoItem with isCompleted set to false
    const newTodo: TodoItem = {
      name: name,
      isCompleted: false,
    };

    // Add the new TodoItem to the list of todos
    setTodos([...todos, newTodo]);

    // Clear the new todo name
    setNewTodoName("");
  };

  // Remove a todo with the given index
  const deleteTodo = (index: number) => {

    // Create a new list of todos without the todo at the given index
    const newTodoArray = [...todos];
    newTodoArray.splice(index, 1);

    // Update the list of todos
    setTodos(newTodoArray);
  };

  // Clear all todos
  const clearAll = () => {

    // Update the list of todos with an empty list
    setTodos([]);
  }


  // Change the isCompleted property of the todo with the given index
  const toggleTodo = (index: number) => {
    const newTodoArray = [...todos];

    // Update the todo at the given index with opposite isCompleted value
    newTodoArray[index].isCompleted = !newTodoArray[index].isCompleted;

    // Update the list of todos
    setTodos(newTodoArray);
  }

  return (
    <div className="flex h-screen w-screen justify-center align-middle justify-items-center p-4 md:p-0">
      <div className="w-96 justify-center flex flex-col">
        <h2 className="text-2xl font-semibold">Todo List</h2>
        <div className="flex rounded-md shadow-sm mt-4">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <input
              type="text"
              name="todo"
              id="todo"
              className="block w-full rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter new task"
              onChange={(e) => {
                setNewTodoName(e.target.value);
              }}
              value={newTodoName}
            />
          </div>
          <button
            type="button"
            onClick={() => addTodo(newTodoName)}
            className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <PlusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <span>Add</span>
          </button>
        </div>
        <div className="mt-6 flow-root ">
          <ul role="list" className="-my-5 divide-y divide-gray-200">
            {todos.map((todo, index) => (
              <li key={index} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <input
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      onChange={() => toggleTodo(index)}
                      checked={todo.isCompleted}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`truncate text-sm font-medium text-gray-900 ${todo.isCompleted ? "line-through" : null}`}>
                      {todo.name}
                    </p>
                  </div>
                  <div>
                    <button className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
                      onClick={
                        () => deleteTodo(index)
                      } >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <button
            className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            onClick={clearAll}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
