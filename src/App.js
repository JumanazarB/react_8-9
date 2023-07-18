import './App.css';
import { useState } from 'react';
function App() {
  const [name,setName] = useState('Jumanazar')

  function nameEdit(){
    return setName("Boqiyev Jumanazar")
  }
  return (
    <div className="App">
      <h1 onClick = {nameEdit}>salom {name}</h1>
    </div>
  );
}

export default App;
