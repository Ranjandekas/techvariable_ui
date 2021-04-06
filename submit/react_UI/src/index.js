import React from 'react';
import ReactDOM from 'react-dom';
import './resources/css/index.css';
import Home from './components/home/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Redirect to="/home" />
            )
          }}
        />
        <Route exact path="/(home|dashboard)" component={Home} />
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
