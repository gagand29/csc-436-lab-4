import React, { useContext } from 'react';
import { StateProvider, StateContext } from './contexts';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Registration from './components/Registration';
import TodoList from './components/TodoList';
import Logout from './components/Logout';

function AppContent() {
  const { state, dispatch } = useContext(StateContext);

  // Handle the registration button click
  const handleRegisterClick = () => {
    dispatch({ type: 'TOGGLE_REGISTRATION' });
  };

  // Determine what to display based on the state
  if (!state.loggedInUser) {
    if (state.showRegistration) {
      return <Registration />;
    } else {
      return <Login onRegisterClick={handleRegisterClick} />;
    }
  } else {
    // When user is logged in
    return (
      <>
        <p>Logged in as: {state.loggedInUser}</p>
        <Logout />
        <TodoList />
      </>
    );
  }
}

function App() {
  return (
    <StateProvider>
      <Header />
      <div className="main-content">
        <AppContent />
      </div>
      <Footer />
    </StateProvider>
  );
}

export default App;
