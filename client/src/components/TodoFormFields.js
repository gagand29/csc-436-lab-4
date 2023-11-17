// TodoFormFields.js
import React from 'react';

export default function TodoFormFields({ onInputChange, newTodo }) {
  return (
    <div>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        value={newTodo.title}
        onChange={onInputChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        name="description"
        id="description"
        value={newTodo.description}
        onChange={onInputChange}
      />

      <label htmlFor="author">Author:</label>
      <input
        type="text"
        name="author"
        id="author"
        value={newTodo.author}
        onChange={onInputChange}
      />
    </div>
  );
}
