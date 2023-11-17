import React, { useEffect } from 'react';
import { useResource } from 'react-request-hook';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, getTodos] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }));

  useEffect(() => {
    getTodos();
  }, [getTodos]); // Fetch todos when the component mounts

  return (
    <div>
      <div className="form-container">
        <h2>Add new todo list</h2>
        <TodoForm />
      </div>

      <div className="list-container">
        <h2>Your Todo List</h2>
        <ul>
          {todos.data && todos.data.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
