// src/App.js
import React from 'react';
import TodoList from './TodoList';
import './App.css'; // We'll add some basic styling in App.css

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;