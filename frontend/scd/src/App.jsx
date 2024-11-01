// frontend/src/App.js
import React from 'react';
import CourseList from './components/CourseList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Course List</h1>
      <CourseList />
    </div>
  );
}

export default App;
