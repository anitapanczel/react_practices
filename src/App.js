
import ButtonList from './buttonList';
import './App.css';

const buttonText = "Click me here again";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonList text={buttonText}/>
      </header>


    </div>
  );
}

export default App;

/*
HÁZI:
Kell egy új komponens, 10x egymás után kirendeli ezt a button komponenst, amit csináltunk. Legyen ez ButtonList. 
A ButtonList hívja meg 10x az InsertText-et. Kikötés: nem 10x leírjuk, hanem ciklusba rendezve.
*/