import React, { useState } from "react";
import {
  LifeStyleContainer,
  LifeStyleSideNav,
  LifeStyleMainContent,
  ListStylesNavItem,
} from "./lifestyle.styles.js";

//importing common components
import CardComponentSubHeader from "../Common-Components/common.components";
const LifeStyleSubHeader = ({ blogPosts, currentNav }) => {
  const [currentSubNav, setCurrentSubNav] = useState("ALL");

  return (
    <>
      <LifeStyleContainer>
        <LifeStyleSideNav>
          <ListStylesNavItem onMouseEnter={() => setCurrentSubNav("ALL")}>
            ALL
          </ListStylesNavItem>

          {blogPosts
            .filter((ele) => ele.category === currentNav)
            .map((data) => {
              return (
                <ListStylesNavItem
                  key={data.id}
                  onMouseEnter={() => setCurrentSubNav(data.subCategory)}
                >
                  {data.subCategory}
                </ListStylesNavItem>
              );
            })}
        </LifeStyleSideNav>
        <LifeStyleMainContent>
          {/* Now we will map the same component using Data file --ALL(DEFAULT state) */}
          {currentSubNav === "ALL"
            ? blogPosts
                .filter((ele) => ele.category === currentNav)
                .map(({ id, img, content }) => {
                  return (
                    <CardComponentSubHeader
                      key={id}
                      img={img}
                      content={content}
                    />
                  );
                })
            : blogPosts
                .filter(
                  (ele) =>
                    ele.category === currentNav &&
                    ele.subCategory === currentNav
                )
                .map(({ id, img, content }) => {
                  return (
                    <CardComponentSubHeader
                      key={id}
                      img={img}
                      content={content}
                    />
                  );
                })}
        </LifeStyleMainContent>
      </LifeStyleContainer>
    </>
  );
};
export default LifeStyleSubHeader;
