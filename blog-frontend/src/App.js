import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/home.screen.jsx";
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path="/" component={HomeScreen} />
        </Router>
      </>
    );
  }
}

export default App;
