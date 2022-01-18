import React from 'react';
import { Routes, Route } from 'react-router';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchBar/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
