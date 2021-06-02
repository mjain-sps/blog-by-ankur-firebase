import React from "react";
import { AddBlogFormContainer } from "./add.new.post.styles.js";

//Bringing in the Input Component to handle the inputs in this section
import InputComponent from "../../../Components/Input/input.textbox.component";
import ButtonComponent from "../../../Components/Button/button.component";
import Messages from "../../../Components/Notifications/messages.component";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//import Services
import { handleBlogPost } from "../../../Services/Post/blog.post.servicefile.js";
class AddBlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      title: "",
      message: null,
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({ editorState });
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlePostSubmit = async (e) => {
    e.preventDefault();
    const { category, title } = this.state;
    const postObject = { category, title };
    const { message } = await handleBlogPost(postObject);
    this.setState({ message: message });
  };

  render() {
    return (
      <>
        {this.state.message && <Messages message={this.state.message} />}

        <AddBlogFormContainer>
          <InputComponent
            placeholder="Enter Blog Category"
            name="category"
            value={this.state.category}
            onChange={this.handleInputChange}
          />
          <InputComponent
            placeholder="Enter Blog Title"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />

          <Editor
            editorState={this.state.editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
          />

          <ButtonComponent
            type="submit"
            onClick={this.handlePostSubmit}
            theme="primary"
          >
            ADD
          </ButtonComponent>
        </AddBlogFormContainer>
      </>
    );
  }
}

export default AddBlogForm;
