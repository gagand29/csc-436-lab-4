import React, { useState } from 'react';
import { useResource } from 'react-request-hook';

export default function TodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState(''); // Add author state if needed

  // Resource for adding a new todo
  const [ , createTodo] = useResource(({ title, description, author }) => ({
    url: '/todos',
    method: 'post',
    data: { title, description, author, dateCreated: Date.now(), complete: false }
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({ title, description, author });
    setTitle('');
    setDescription('');
    setAuthor('');
  };

  return (
    <div>
      <form id="todo-form" className="login-form" onSubmit={handleSubmit}>
        <label>
          Title:
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </label>
        <label>
          Description:
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </label>
        <label>
          Author:
          <input 
            type="text" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
          />
        </label>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
