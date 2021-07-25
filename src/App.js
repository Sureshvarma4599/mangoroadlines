import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import {BrowserRouter as Router,Switch,Route,BrowserRouter} from 'react-router-dom'
import Dashboard from './components/dashboard';
import Mini from './components/mini'
import Mango from './components/mango'
import Third from './components/third'
function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/">
              <Login/>
          </Route>
          <Route  path="/dashboard">
              <Dashboard/>
          </Route>
          <Route  path="/mini">
              <Mini/>
          </Route>
          <Route  path="/mango-roadlines">
              <Mini/>
          </Route>
          <Route  path="/third">
              <Mini/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
