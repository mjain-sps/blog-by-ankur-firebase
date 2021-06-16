import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen/home.screen.jsx";

//Importing Authentication related Screens and Components
import AuthScreen from "./Screens/Authentication/auth.screens.jsx";
import Signup from "./Components/AuthComponents/Signup/signup.components";

//Importing Admin Screens and Components
import AdminHome from "./Screens/AdminScreens/AdminHome/admin.home.components";
import AddBlogForm from "./Screens/AdminScreens/AddNewPost/add.new.post.component.jsx";
import AdminViewAllPosts from "./Screens/AdminScreens/AdminViewAllPosts/admin.allposts.component";
import ManageCategories from "./Screens/AdminScreens/ManageCategoriesForSubHeaders/categories.subheaders.components";
import PostsDetailPage from "./Screens/AdminScreens/ViewSinglePost/post.detailpage.component";
import ManageCategoriesForHomeScreenDisplay from "./Screens/AdminScreens/ManageCatagoriesForHomeScreen/categories.homescreendisplay";

//Doing testing to firebase emulator, hence making a dummy screen
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path="/" component={HomeScreen} />

          <Route exact path="/signin" component={AuthScreen} />
          <Route exact path="/signup" component={Signup} />

          <Route exact path="/admin/add-new-post" component={AddBlogForm} />
          <Route exact path="/admin-home" component={AdminHome} />
          <Route
            exact
            path="/admin/sub-header-add"
            component={ManageCategories}
          />

          <Route
            exact
            path="/admin/view-all-posts"
            component={AdminViewAllPosts}
          />

          <Route
            exact
            path="/admin/home-screen-category-add"
            component={ManageCategoriesForHomeScreenDisplay}
          />

          <Route path="/admin/post-detail/:id" component={PostsDetailPage} />
        </Router>
      </>
    );
  }
}

export default App;
