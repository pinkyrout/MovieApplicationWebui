import React, { Component } from "react";
import axios from "axios";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home.js";
import Authenticate from "./components/registrations/Authenticate.js";
import  "./App.css";
import ShowsList from "./components/shows/ShowsList.js";
import BookingsList from "./components/bookings/BookingsList.js";
import Movies from "./components/movies/Index.js";
import MoviesCreate from "./components/movies/Create.js";
import MoviesEdit from "./components/movies/Edit.js";
import Shows from "./components/shows/Index.js";
import ShowReport from "./components/shows/Report.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact path="/"
              render={props => (
              <Home {...props} />
              )}
            />
            <Route
              exact path="/login"
              render={props => (
              <Authenticate {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route
              exact path="/:id/list_shows"
              render={props => (
                <ShowsList {...props} />
              )}
            />
            <Route
              exact path="/list_bookings"
              render={props => (
                <BookingsList {...props} />
              )}
            />
            <Route
              exact path="/admin_dashboard/movies"
              render={props => (
                <Movies {...props} />
              )}
            />
            <Route
              exact path="/admin_dashboard/movies/create"
              render={props => (
                <MoviesCreate {...props} />
              )}
            />
            <Route
              exact path="/admin_dashboard/movies/:id/edit"
              render={props => (
                <MoviesEdit {...props} />
              )}
            />
            <Route
              exact path="/admin_dashboard/shows"
              render={props => (
                <Shows {...props} />
              )}
            />
            <Route
              exact path="/admin_dashboard/shows/:id/report"
              render={props => (
                <ShowReport {...props} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
