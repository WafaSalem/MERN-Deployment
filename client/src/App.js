import './App.css';
import PetsForm from './compnents/PetsForm'
import Edit from './views/Edit'
import Home from './views/Home'
import Detail from './views/Detail'
import Likes from './compnents/Likes'
import { Link, Router } from "@reach/router";
function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <Home path="/" />
        <PetsForm path="/new" />
        <Edit path="/edit/:id" /> 
        <Detail path="/detail/:id" />
        <Likes path="/likes/:id" />
      </Router>
    </div>
  );
}

export default App;
