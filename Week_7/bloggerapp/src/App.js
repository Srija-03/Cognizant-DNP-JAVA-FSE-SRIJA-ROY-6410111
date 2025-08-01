import React from 'react';
import './App.css';
import { books } from './books';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  return (
    <div className="App">
      <div className="container">
        <CourseDetails />
        <BookDetails books={books} />
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;