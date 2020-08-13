import React from 'react';
import StarRating from "./components/StarRating";
import './App.css';

function App() {
  return (
    <div className="App">
   <StarRating
   style={{ backgroundColor: "lightblue"}}
   onDoubleClick={e => alert("double click")}
   />
    </div>
  );
}

export default App;
