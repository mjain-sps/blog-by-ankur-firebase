import React from "react";
import {
  AddBlogFormContainer,
  EditorContainer,
  ImageInputContainer,
  ImageInputButtonDiv,
  PublishButtonContainer,
} from "./add.new.post.styles.js";
import firebase from "../../../Firebase/db";
//Bringing in the Input Component to handle the inputs in this section
import InputComponent from "../../../Components/Input/input.textbox.component";
import ButtonComponent from "../../../Components/Button/button.component";
import Messages from "../../../Components/Notifications/messages.component";
import LabelComponent from "../../../Components/Label/label.components";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//import Services

//1. Service which will do a POST requiest to firestore to add the blog post
import { postBlogService } from "../../../Services/Post/blog.post.servicefile.js";

//Main Component Starts
class AddBlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      title: "",
      message: null,
      blogSynopsis: "",
      uploadedImage: "",
      uploadedImageURL: null,
      editorState: EditorState.createEmpty(),
      saveDraft: false,
      publish: false,
      author: "",
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({ editorState });
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  doFieldValidation = () => {
    if (
      !this.state.category ||
      !this.state.title ||
      !this.state.blogSynopsis ||
      !this.state.uploadedImage ||
      !this.state.uploadedImageURL ||
      !this.author ||
      !this.state.editorState.getCurrentContent().getPlainText()
    ) {
      return true;
    } else {
      return false;
    }
  };
  handlePublish = async (e) => {
    e.preventDefault();
    const validated = this.doFieldValidation();

    if (!validated) {
      alert(
        "Some Fields are incomplete. Please complete all fields and then submit again"
      );
    }
    if (validated) {
      this.setState({ publish: true });
      const {
        category,
        title,
        blogSynopsis,
        uploadedImageURL,
        uploadedImage,
        publish,
        author,
      } = this.state;
      const postObject = {
        category,
        title,
        blogSynopsis,
        uploadedImage,
        uploadedImageURL,

        publish,
        author,
        blogContent: this.state.editorState.getCurrentContent().getPlainText(),
      };
      postBlogService(postObject)
        .then(() => this.props.history.push("/"))
        .catch((err) => console.log(err));
    }
  };

  handleDraft = (e) => {
    e.preventDefault();
    const {
      category,
      title,
      blogSynopsis,
      uploadedImageURL,
      uploadedImage,
      editorState,
      publish,
    } = this.state;
    const postObject = {
      category,
      title,
      blogSynopsis,
      uploadedImage,
      uploadedImageURL,
      editorState,
      publish,
    };
    postBlogService(postObject)
      .then(() => this.setState({ message: "Draft Saved Successfully" }))
      .catch((err) => console.log(err));
  };

  handleBlogSynopsis = (e) => {
    if (e.target.value.length <= e.target.maxLength) {
      this.setState({ blogSynopsis: e.target.value });
    }
  };

  handleImageUpload = (e) => {
    const fileToBeUploaded = e.target.files[0];
    this.setState({ uploadedImage: fileToBeUploaded.name });

    const storageRef = firebase.storage().ref();

    const imageUploadedRef = storageRef.child(
      `images/${fileToBeUploaded.name}`
    );
    const metadata = { contentType: "image/jpeg/png" };
    const uploadTask = imageUploadedRef.put(fileToBeUploaded, metadata);

    //To check the progress we will add code lates
    //I have to add code here
    //to get the download URL
    uploadTask.snapshot.ref
      .getDownloadURL()
      .then((downloadurl) => this.setState({ uploadedImageURL: downloadurl }));
  };
  render() {
    return (
      <>
        {this.state.message && <Messages message={this.state.message} />}

        <AddBlogFormContainer>
          <InputComponent
            placeholder="Author"
            name="author"
            value={this.state.author}
            onChange={this.handleInputChange}
          />

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

          <InputComponent
            placeholder="Blog Synopsis - Max 200 words"
            name="blogSynopsis"
            maxLength="150"
            value={this.state.blogSynopsis}
            onChange={this.handleBlogSynopsis}
            id="blog-synopsis"
          />

          <LabelComponent htmlFor="blogSynopsis">
            {this.state.blogSynopsis.length
              ? `${
                  150 - parseInt(this.state.blogSynopsis.length)
                } characters left`
              : ""}
          </LabelComponent>

          <EditorContainer>
            <Editor
              editorState={this.state.editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={this.onEditorStateChange}
            />
          </EditorContainer>

          <ImageInputContainer>
            <ImageInputButtonDiv>
              <LabelComponent htmlFor="imageInput">UPLOAD</LabelComponent>
              <span>
                {this.state.uploadedImage &&
                  `${this.state.uploadedImage} uploaded successfully`}{" "}
              </span>
              <InputComponent
                type="file"
                onChange={this.handleImageUpload}
                id="imageInput"
              />
            </ImageInputButtonDiv>
            <div>
              <img src={`${this.state.uploadedImageURL}`} alt="" />
            </div>
          </ImageInputContainer>

          <PublishButtonContainer>
            <ButtonComponent
              type="submit"
              onClick={this.handleDraft}
              theme="secondary"
            >
              SAVE AS DRAFT
            </ButtonComponent>

            <ButtonComponent
              type="submit"
              onClick={this.handlePublish}
              theme="primary"
            >
              PUBLISH
            </ButtonComponent>
          </PublishButtonContainer>
        </AddBlogFormContainer>
      </>
    );
  }
}

export default AddBlogForm;
