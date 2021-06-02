import React from "react";
import {
  LifeStyleContainer,
  LifeStyleSideNav,
  LifeStyleMainContent,
  ListStylesNavItem,
} from "./lifestyle.styles.js";

//importing the relevant data
import lifeStylesData from "../../../Data-Files/LifeStyle-SubHeader";

//importing common components
import CardComponentSubHeader from "../Common-Components/common.components";
class LifeStyleSubHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSubNav: "ALL",
    };
  }
  render() {
    return (
      <>
        <LifeStyleContainer>
          <LifeStyleSideNav>
            <ListStylesNavItem
              onMouseEnter={() => this.setState({ currentSubNav: "ALL" })}
            >
              ALL
            </ListStylesNavItem>
            <ListStylesNavItem
              onMouseEnter={() => this.setState({ currentSubNav: "FASHION" })}
            >
              FASHION
            </ListStylesNavItem>
            <ListStylesNavItem
              onMouseEnter={() => this.setState({ currentSubNav: "FITNESS" })}
            >
              FITNESS
            </ListStylesNavItem>
            <ListStylesNavItem
              onMouseEnter={() =>
                this.setState({ currentSubNav: "FRAGNANCES" })
              }
            >
              FRAGNANCES
            </ListStylesNavItem>
            <ListStylesNavItem
              onMouseEnter={() => this.setState({ currentSubNav: "STYLES" })}
            >
              STYLES
            </ListStylesNavItem>
            <ListStylesNavItem
              onMouseEnter={() => this.setState({ currentSubNav: "WELLNESS" })}
            >
              WELLNESS
            </ListStylesNavItem>
          </LifeStyleSideNav>
          <LifeStyleMainContent>
            {/* Now we will map the same component using Data file --ALL(DEFAULT state) */}
            {this.state.currentSubNav === "ALL" &&
              lifeStylesData.lifeStylesAllData.map(({ id, img, content }) => {
                return (
                  <CardComponentSubHeader
                    key={id}
                    img={img}
                    content={content}
                  />
                );
              })}
            {/* Now we will map the same component using Data file --FASHION */}
            {this.state.currentSubNav === "FASHION" &&
              lifeStylesData.lifeStylesFashionData.map(
                ({ id, img, content }) => {
                  return (
                    <CardComponentSubHeader
                      key={id}
                      img={img}
                      content={content}
                    />
                  );
                }
              )}
          </LifeStyleMainContent>
        </LifeStyleContainer>
      </>
    );
  }
}
export default LifeStyleSubHeader;
