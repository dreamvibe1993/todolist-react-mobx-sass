import React from 'react';
import './App.scss';
import { TodoCreationModal } from './components/TodoCreationModal';
import { TodoListComponent } from './components/TodoList/TodoListComponent';


function App(): JSX.Element {
  return (
    <div className="App">
      <nav className="Navbar">
        <h3>TO-DO-DOO&apos;s</h3>
      </nav>
      <TodoCreationModal />
      <TodoListComponent />
    </div>
  );
}

export default App;
