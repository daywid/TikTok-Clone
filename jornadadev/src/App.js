import React from 'react';
import "./App.css";
import Video from "./pages/video"

function App() {
  return (
    <div className="App">
     <div className ="app__videos">
      <Video />
      <Video />
      <Video />
      <Video />
     </div>
    </div>
  );
}

export default App;
