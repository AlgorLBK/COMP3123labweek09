import logo from './logo.svg';
import './App.css';
import DataInfo from './Data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DataInfo/>
      </header>
    </div>
  );
}

export default App;
