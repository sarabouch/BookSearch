import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { BookPage } from "./components/BookPage";

// Create a staful class component
export class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path="/" component={HomePage} />
            <Route path="/book/:id" component={BookPage} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}