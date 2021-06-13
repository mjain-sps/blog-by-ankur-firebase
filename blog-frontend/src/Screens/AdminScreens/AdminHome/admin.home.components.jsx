import React from "react";
//importing Styled components
import {
  AdminContainer,
  AdminCard,
  AdminCardTitle,
  AdminCardContent,
  AdminCardIcon,
} from "./admin.home.styles";
//Importing Icons and methods
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBinoculars,
  faFile,
  faHighlighter,
} from "@fortawesome/free-solid-svg-icons";

const AdminHome = (props) => {
  return (
    <>
      <AdminContainer>
        {/* Card to View all the posts */}
        <AdminCard onClick={() => props.history.push("/admin/view-all-posts")}>
          <AdminCardTitle>VIEW ALL POSTS</AdminCardTitle>
          <AdminCardIcon>
            {<FontAwesomeIcon icon={faBinoculars} />}
          </AdminCardIcon>
          <AdminCardContent>Total 10 Posts</AdminCardContent>
        </AdminCard>

        {/* Card to Add a New Post */}
        <AdminCard onClick={() => props.history.push("/admin/add-new-post")}>
          <AdminCardTitle>ADD NEW POST</AdminCardTitle>
          <AdminCardIcon>{<FontAwesomeIcon icon={faFile} />}</AdminCardIcon>
          <AdminCardContent>
            Last post Added 'How to Deal Depression' on 13th May 2021
          </AdminCardContent>
        </AdminCard>

        {/* Card to Update a Post */}
        <AdminCard>
          <AdminCardTitle>UPDATE EXISTING POST</AdminCardTitle>
          <AdminCardIcon>
            {<FontAwesomeIcon icon={faHighlighter} />}
          </AdminCardIcon>
          <AdminCardContent>
            <button>Open Last draft of 'Deal with Depression' post</button>
            <button>Choose from the whole list</button>
          </AdminCardContent>
        </AdminCard>

        {/* Card to Manage Categories w.rt headers */}
        <AdminCard onClick={() => props.history.push("/admin/sub-header-add")}>
          <AdminCardTitle>MANAGE CATEGORIES </AdminCardTitle>
          <AdminCardIcon>{<FontAwesomeIcon icon={faFile} />}</AdminCardIcon>
          <AdminCardContent>
            <AdminCardContent>
              Manage Categories w.r.t Sub Headers
            </AdminCardContent>
          </AdminCardContent>
        </AdminCard>

        {/* Card to Manage Categories w.rt HomeScreen */}
        <AdminCard
          onClick={() => props.history.push("/admin/home-screen-category-add")}
        >
          <AdminCardTitle>MANAGE CATEGORIES </AdminCardTitle>
          <AdminCardIcon>{<FontAwesomeIcon icon={faFile} />}</AdminCardIcon>
          <AdminCardContent>
            <AdminCardContent>
              Manage Categories w.r.t HOME SCREEN
            </AdminCardContent>
          </AdminCardContent>
        </AdminCard>
      </AdminContainer>
    </>
  );
};

export default AdminHome;
