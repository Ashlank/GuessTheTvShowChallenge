import { Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Adivina la película!</h1>
      <Link to={'/game'}>
        <button type='button'>Iniciar Juego</button>
      </Link>
    </div>
  );
}

export default App;
