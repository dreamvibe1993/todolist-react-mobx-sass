import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Options } from './components/Options';
import { TodoCreationModal } from './components/TodoCreationModal';
import { TodoListComponent } from './components/TodoList/TodoListComponent';


function App() {
  return (
    <div className="App">
      <nav className="Navbar">
        <h3>TO-DO-DOO's</h3>
      </nav>
      <TodoCreationModal />
      <TodoListComponent />
    </div>
  );
}

export default App;
