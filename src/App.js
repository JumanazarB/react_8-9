import './App.css';
import { useState } from 'react';
function App() {
  const [name,setName] = useState('Assalomu alaykum')
  const [events] = useState([
    {title:"Barselona", rank:1},
    {title:"ManCity", rank:2},
    {title:"Bavariya", rank:3}]
  )
  function nameEdit(){
    return setName("Xush kelibsiz, Boqiyev Jumanazar")
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick = {nameEdit}>Welcome</button>
      {events.map((event,id)=>{
        return (
        <div key = {event.id}>
          <h2>{event.title}</h2>
        </div>)
      })}
    </div>
  );
}

export default App;
