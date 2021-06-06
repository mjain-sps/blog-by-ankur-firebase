import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getBlogsAction } from "../../../Actions/blogs.actions";
import LoaderComponent from "../../../Components/Loader/loader.component";
import Messages from "../../../Components/Notifications/messages.component";
import ToggleSwitch from "../../../Components/ToggleSwitch/toggle.switch.component";
import {
  ManageCategoryContainer,
  ManageCategoriesMasterContainer,
  Section,
} from "./categories.styles";
const ManageCategories = () => {
  //Defining State
  const [blogData, setBlogData] = useState([]);

  const dispatch = useDispatch();
  const blogsFromState = useSelector((state) => state.blogSnapshot);
  const { loading, error, blogSnapshot } = blogsFromState;

  //useEffect to dispatch an action to fetch blogs if no blog is present initially
  useEffect(() => {
    if (!blogSnapshot.length) {
      dispatch(getBlogsAction());
    } else {
      setBlogData(blogSnapshot.filter((ele) => ele));
    }
  }, [dispatch, blogSnapshot]);

  //All Functions here
  const handleToggle = (e) => {
    //since it will flip the checked on Change
    //so false will become true when entering this loop
    //but first we will just check the value
    const count = blogData.filter((ele) => ele.category[1]);
    if (count.length >= 5) {
      alert("Max Checked Reached. Cannot Check more");
      return;
    } else {
      const newBlogData = blogData.map((ele) => {
        if (ele.id === e.target.id) {
          ele.category[1] = e.target.checked;
        }

        return ele;
      });
      setBlogData(newBlogData);
    }
  };

  const calculateCheckedCategories = () => {
    const count = blogData.filter((ele) => ele.category[1]);

    return count.length;
  };
  console.log("state", blogData);
  //Main component render starts
  return loading ? (
    <LoaderComponent />
  ) : (
    <>
      {error && <Messages>{error}</Messages>}
      <ManageCategoriesMasterContainer>
        <h3>Manage Category Sub Headers here</h3>
        <p>
          Categories marked as selected here will be shown as subheaders on the
          home page. Maximum you may select 5 categories
        </p>

        <p>
          <span>Categories Checked &nbsp;</span>
          {blogData.length && calculateCheckedCategories()}
        </p>
        <Section>
          <span>Name</span>
          <span>Status</span>
        </Section>
        {blogData.length &&
          blogData.map((blog) => {
            return (
              <ManageCategoryContainer key={blog.id}>
                <h5>{blog.category[0]}</h5>
                <div>
                  <ToggleSwitch
                    id={blog.id}
                    checked={blog.category[1]}
                    onChange={handleToggle}
                    rounded={true}
                  />
                </div>
              </ManageCategoryContainer>
            );
          })}
      </ManageCategoriesMasterContainer>
    </>
  );
};

export default ManageCategories;
