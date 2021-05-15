import logo from './logo.svg';
import './App.css';
import Search from "./components/Search";
import Nav from './components/Nav';
import Moviedetails from './components/Moviedetails';

function App() {
  return (
    <Router>
    <div className="App">
    <Main />
    <Switch>
    <Route path ="/" exact component ={Actors} />
    <Route path ="/Search"  component ={Search} />
    <Route path ="/Moviedetails" component ={Moviedetails} /> 
    <Route path ="/awards" component ={Awards} /> 
    </Switch>
    </div>
    </Router>
  );
}
const Actors=() =>
<div>
  Following are the Actors
</div>

export default App;

