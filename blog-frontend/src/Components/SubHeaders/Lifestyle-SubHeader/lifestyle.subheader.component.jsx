import React, { useState, useEffect } from "react";
import {
  LifeStyleContainer,
  LifeStyleSideNav,
  LifeStyleMainContent,
  ListStylesNavItem,
} from "./lifestyle.styles.js";

//importing common components
import CardComponentSubHeader from "../Common-Components/common.components";

//importing Loader component
import LoaderComponent from "../../Loader/loader.component";
//Main Function starts
const LifeStyleSubHeader = ({ relevantBlogPosts, currentNav }) => {
  const [currentSubNav, setCurrentSubNav] = useState("ALL");
  const [combinedSubCategories, setCombinedSubCategories] = useState([]);

  useEffect(() => {
    let tempArray = [];
    if (relevantBlogPosts.length) {
      relevantBlogPosts.forEach((ele) => {
        if (!tempArray.length) {
          tempArray.push({
            subcategory: ele.subCategory,
            data: [ele],
            id: ele.id,
          });
        } else {
          const found = tempArray.find(
            (e) => e.subcategory === ele.subCategory
          );
          if (!found) {
            tempArray.push({
              subcategory: ele.subCategory,
              data: [ele],
              id: ele.id,
            });
          } else {
            const index = tempArray.indexOf(found);
            tempArray[index].data.push(ele);
          }
        }
      });
    }
    setCombinedSubCategories(tempArray);
  }, [relevantBlogPosts]);

  return (
    <>
      {combinedSubCategories.length ? (
        <LifeStyleContainer>
          <LifeStyleSideNav>
            {/* This will basically show 'ALL' in the side nav bar */}
            <ListStylesNavItem onMouseEnter={() => setCurrentSubNav("ALL")}>
              ALL
            </ListStylesNavItem>

            {/* This will show all the subCategories under selected category as side navbars */}
            {/* We will wait for Use Effect to run the function and make a combined Sub headers array */}
            {/* Only after that we will start rendering the side navbars, as we do not want duplicate subcategory to be shown in side navbar */}
            {combinedSubCategories.map((ele) => {
              return (
                <ListStylesNavItem
                  key={ele.id}
                  onMouseEnter={() => setCurrentSubNav(ele.subcategory)}
                >
                  {ele.subcategory.toUpperCase()}
                </ListStylesNavItem>
              );
            })}
          </LifeStyleSideNav>

          <LifeStyleMainContent>
            {/* Now we will map the same component using Data file --ALL(DEFAULT state) */}
            {currentSubNav === "ALL"
              ? combinedSubCategories.map(({ subcategory, data }) => {
                  return data.map((actualData) => {
                    return (
                      <CardComponentSubHeader
                        key={actualData.id}
                        img={actualData.uploadedImageURL}
                        content={`${subcategory} - ${actualData.blogSynopsis}`}
                      />
                    );
                  });
                })
              : combinedSubCategories
                  .filter((ele) => ele.subcategory === currentSubNav)
                  .map(({ data }) => {
                    return data.map((actualData) => {
                      return (
                        <CardComponentSubHeader
                          key={actualData.id}
                          img={actualData.uploadedImageURL}
                          content={actualData.blogSynopsis}
                        />
                      );
                    });
                  })}
          </LifeStyleMainContent>
        </LifeStyleContainer>
      ) : (
        <LoaderComponent />
      )}
    </>
  );
};
export default LifeStyleSubHeader;
