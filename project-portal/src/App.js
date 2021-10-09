import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import GetStart from './Pages/GetStart';
import LoginPage from './Pages/LoginPage';
import DashBoard from './Pages/DashBoard';
import User from './Pages/User';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={GetStart}/>
          <Route path="/login" exact component={LoginPage}/>
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/dashboard" exact component={DashBoard}/>
          <Route path="/user" exact component={User}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
