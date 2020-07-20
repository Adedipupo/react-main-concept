import React from 'react';
import './App.css';

const user = {
  firstName : 'Jokanola',
  lastNAme : 'Adedipupo'
}

function User(user) {
  return `user.firstName + '' + user.lastName` 
}

const element = <h1> H1 , ${User}</h1>;
function App(user) {
  return (
    <div>
     {element};
     
    </div>
  );
}

export default App;
