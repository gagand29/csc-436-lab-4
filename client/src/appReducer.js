// appReducer.js
export const initialState = {
    showRegistration: false,
    loggedInUser: null,
    todos: []
  };
  
  export function appReducer(state, action) {
    switch (action.type) {
      case 'TOGGLE_REGISTRATION':
        return { ...state, showRegistration: !state.showRegistration };
      case 'SET_LOGGED_IN_USER':
        return { ...state, loggedInUser: action.payload };
      case 'LOGOUT':
        return { ...state, loggedInUser: null, todos: [] }; // Clear todos on logout
      case 'ADD_TODO':
        return { ...state, todos: [...state.todos, action.payload] };
      case 'TOGGLE_COMPLETE':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload
              ? { ...todo, complete: !todo.complete, dateCompleted: !todo.complete ? new Date() : null }
              : todo
          )
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
      // ... other actions ...
      default:
        return state;
    }
  }
  