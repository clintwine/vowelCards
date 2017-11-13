import React from 'react';
import ReactDOM from 'react-dom';
import Letter from './components/Letter';



// Render application to DOM

ReactDOM.render(
    <div>
      <Letter bgcolor="#00BFFF">A</Letter>
      <Letter bgcolor="#FF605F">E</Letter>
      <Letter bgcolor="#FFD52E">I</Letter>
      <Letter bgcolor="#49DD8E">O</Letter>
      <Letter bgcolor="#AE99FF">U</Letter>
    </div>,
    document.getElementById("react-container")
);
