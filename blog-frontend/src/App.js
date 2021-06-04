import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/home.screen.jsx";
import AddBlogForm from "./Screens/AdminScreens/AddNewPost/add.new.post.component.jsx";
import AuthScreen from "./Screens/Authentication/auth.screens.jsx";
import Signup from "./Components/AuthComponents/Signup/signup.components";
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/admin/add-new-post" component={AddBlogForm} />
          <Route exact path="/signin" component={AuthScreen} />
          <Route exact path="/signup" component={Signup} />
        </Router>
      </>
    );
  }
}

export default App;
