import React from 'react';
import './App.css';

const user = {
  firstName : 'Jokanola',
  lastNAme : 'Adedipupo'
}

function User(user) {
  return user.firstName + ' ' + user.lastNAme; 
}

const element = (<h1> H1 , {User(user)}</h1>);
function App(user) {
  return (
    <div>
     {element};
     
    </div>
  );
}

function tick(){
  return (
  const time = (
    <div>
      <h1>Hello </h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  setInterval(tick, 1000);
  );
}

export default App;
