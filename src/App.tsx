import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Options } from './components/Options';
import { TodoCreationModal } from './components/TodoCreationModal';
import { TodoListComponent } from './components/TodoList/TodoListComponent';


function App() {
  return (
    <div className="App">
      <TodoCreationModal />
      <Options />
      <TodoListComponent />
    </div>
  );
}

export default App;
