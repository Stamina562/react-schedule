import './App.css';
import Screen from './containers/screen';
import { useEffect, useState } from 'react';

function App() {
  const [mobile, setMobile] = useState(window.innerWidth < 700);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if(window.innerWidth < 700) setMobile(true)
        else setMobile(false);
    })
  })
  return (
    <div className="App">
      <h1>Schedule</h1>
      <Screen mobile={mobile}></Screen>
    </div>
  );
}

export default App;
