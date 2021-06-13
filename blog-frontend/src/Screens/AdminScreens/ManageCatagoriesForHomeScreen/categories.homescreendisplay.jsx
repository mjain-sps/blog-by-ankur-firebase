import React, { useEffect, useState } from "react";
//importing Methods
import { useDispatch, useSelector } from "react-redux";

//importing Actions
import { getBlogsAction } from "../../../Actions/blogs.actions";
import { addCategoryHomeScreenAction } from "../../../Actions/category.homescreen.actions";

//Importing reusable components
import ButtonComponent from "../../../Components/Button/button.component";
import ToggleSwitch from "../../../Components/ToggleSwitch/toggle.switch.component";

//Importing Loader and Messages components for loading and displaying error
import LoaderComponent from "../../../Components/Loader/loader.component";
import Messages from "../../../Components/Notifications/messages.component";

// Importing Styles
import {
  ManageCategoryContainer,
  ManageCategoriesMasterContainer,
  Section,
} from "./categories.styles";

const ManageCategoriesForHomeScreenDisplay = () => {
  //Defining State
  const [categoriesDistinct, setCategoriesDistinct] = useState([]);
  const [categoryChecked, setCategoryChecked] = useState({ checked: [] });

  const dispatch = useDispatch();
  const blogsFromState = useSelector((state) => state.blogSnapshot);
  const { loading, error, blogSnapshot } = blogsFromState;

  //useEffect to dispatch an action to fetch blogs if no blog is present initially
  useEffect(() => {
    if (!blogSnapshot.length) {
      dispatch(getBlogsAction());
    } else {
      //create a new set with unique category names
      const distinctCat = [
        ...new Map(
          blogSnapshot.map((item) => [item["category"], item])
        ).values(),
      ];
      setCategoriesDistinct(distinctCat);
    }
  }, [dispatch, blogSnapshot]);
  //All Functions here
  const handleToggle = (e) => {
    if (e.target.checked === true) {
      setCategoryChecked((prevState) => {
        return {
          ...prevState,
          checked: [
            ...prevState.checked,
            { id: e.target.id, category: e.target.value },
          ],
        };
      });
    } else {
      setCategoryChecked((prevState) => {
        return {
          ...prevState,
          checked: prevState.checked.filter((ele) => ele.id !== e.target.id),
        };
      });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    dispatch(addCategoryHomeScreenAction(categoryChecked));
  };
  //Main component render starts
  return loading ? (
    <LoaderComponent />
  ) : (
    <>
      {error && <Messages>{error}</Messages>}
      <ManageCategoriesMasterContainer>
        <h3>Manage Category Home Screen</h3>
        <p>
          Categories marked as selected here will be shown as sections on home
          page. Maximum you may select 5 categories
        </p>

        <p>
          <span>Categories Checked &nbsp;</span>
          {categoryChecked.checked.length}
        </p>
        <Section>
          <span>Name</span>
          <span>Status</span>
        </Section>
        {categoriesDistinct.length &&
          categoriesDistinct.map((cat) => {
            return (
              <ManageCategoryContainer key={cat.id}>
                <h5>{cat.category}</h5>
                <div>
                  <ToggleSwitch
                    id={cat.id}
                    defaultChecked={false}
                    onChange={handleToggle}
                    value={cat.category}
                    rounded={true}
                  />
                </div>
              </ManageCategoryContainer>
            );
          })}
        <ButtonComponent theme="primary" type="button" onClick={handleSave}>
          SAVE
        </ButtonComponent>
      </ManageCategoriesMasterContainer>
    </>
  );
};

export default ManageCategoriesForHomeScreenDisplay;
