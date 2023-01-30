import './App.css';
import { Component1 } from './components/component1';
import { Component2 } from './components/component2';

function App() {
  return (
    <div className="App">
      <div className='components'>
        <Component1 />
        <Component2 />
      </div>
    </div>
  );
}

export default App;
