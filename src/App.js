// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import Booking from './pages/booking/Booking';
import DetailBooking from './pages/booking/DetailBooking';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/booking">
              <Booking/>
            </Route>
            <Route path="/data-booking/:id">
              <DetailBooking/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
        {/* <Login /> */}
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </>
  );
}

export default App;
