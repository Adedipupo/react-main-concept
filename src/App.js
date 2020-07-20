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
  const time = (
    <div>
      <h1>Hello </h1>
    </div>
  )
}

export default App;
