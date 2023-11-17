import React from 'react';
import { useResource } from 'react-request-hook';

export default function TodoItem({ todo }) {
  const { id, title, description, author, dateCreated, complete } = todo;

  // Resource for toggling todo completion
  const [ , toggleTodo] = useResource(({ id, complete }) => ({
    url: `/todos/${id}`,
    method: 'patch',
    data: { complete: !complete }
  }));

  // Resource for deleting a todo
  const [ , deleteTodo] = useResource(id => ({
    url: `/todos/${id}`,
    method: 'delete'
  }));

  const handleToggleComplete = () => {
    toggleTodo({ id, complete: !complete });
    // Consider re-fetching todos or updating state to reflect changes
  };

  const handleDelete = () => {
    deleteTodo(id);
    // Consider re-fetching todos or updating state to reflect changes
  };

  return (
    <li>
      <h3>{title}</h3>
      <p>Description: {description}</p>
      <p>Author: {author}</p>
      <p>Created: {new Date(dateCreated).toLocaleString()}</p>
      <label>
        <input type="checkbox" checked={complete} onChange={handleToggleComplete} />
        {complete ? 'Completed' : 'Incomplete'}
      </label>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
