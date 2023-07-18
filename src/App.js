import './App.css';
import { useState } from 'react';
function App() {
  const [name, setName] = useState('Assalomu alaykum')
  const [shownBoolen, setShownBoolen] = useState(true);
  const [events, setEvents] = useState([
    { title: "Barselona", rank: 1 },
    { title: "ManCity", rank: 2 },
    { title: "Bavariya", rank: 3 }]

  )
  function nameEdit() {
    return setName("Xush kelibsiz, Boqiyev Jumanazar")
  }

  function itemDelete(id) {
    setEvents((prev) => {
      return prev.filter((item) => {
        return item.rank !== id
      })
    })
  }


  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={nameEdit}>Welcome</button>
      <hr></hr>
      {shownBoolen && <button onClick={()=> setShownBoolen(false)}>hide</button>}
      {!shownBoolen && <button onClick={()=> setShownBoolen(true)}>show</button>}
      {shownBoolen && <div>{events.length === 0 && <h3>Malumotlar yuq</h3>}
      {
        events.map((event) => {
          return (
            <div key={event.rank}>
              <h2>{event.title}</h2>
              <button onClick={() => itemDelete(event.rank)}>Delete</button>
            </div>)
        })
      }</div>
      }
    </div>
  );
}

export default App;
