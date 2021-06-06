import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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

//importing Actions
import {
  resetStateBeforePostAction,
  postBlogAction,
} from "../../../Actions/blogs.actions";

import LoaderComponent from "../../../Components/Loader/loader.component.jsx";

//Main Component Starts
const AddBlogForm = (props) => {
  //Lets define React-Redux constants
  const dispatch = useDispatch();
  const newPostFromState = useSelector((state) => state.newBlog);
  const { loading, error, addedBlog } = newPostFromState;
  //First we want to reset the state on component mount
  useEffect(() => {
    dispatch(resetStateBeforePostAction());
  }, [dispatch]);

  //Lets define Component State variables
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [title, setTitle] = useState("");
  const [blogSynopsis, setBlogSynopsis] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [uploadedImageURL, setUploadedImageURL] = useState(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [saveDraft, setSaveDraft] = useState(false);
  const [author, setAuthor] = useState("");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const doFieldValidation = () => {
    if (
      title !== "" &&
      category !== "" &&
      blogSynopsis !== "" &&
      uploadedImage !== "" &&
      uploadedImageURL !== null &&
      author !== "" &&
      subCategory !== "" &&
      editorState.getCurrentContent().getPlainText() !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handlePublish = async (e) => {
    e.preventDefault();
    const validated = doFieldValidation();
    if (!validated) {
      alert(
        "Some Fields are incomplete. Please complete all fields and then submit again"
      );
    }
    if (validated) {
      const postObject = {
        category: [category, false],
        subCategory,
        title,
        blogSynopsis,
        uploadedImage,
        uploadedImageURL,
        publish: true,
        author,
        blogContent: editorState.getCurrentContent().getPlainText(),
      };
      console.log(postObject);
      dispatch(postBlogAction(postObject));
    }
  };

  const handleDraft = (e) => {
    e.preventDefault();
    setSaveDraft(true);
    const postObject = {
      category,
      title,
      blogSynopsis,
      uploadedImage,
      uploadedImageURL,
      editorState,
      publish: false,
      saveDraft,
    };
    //Handling of draft is still pending
  };

  const handleBlogSynopsis = (e) => {
    if (e.target.value.length <= e.target.maxLength) {
      setBlogSynopsis(e.target.value);
    }
  };

  const handleImageUpload = (e) => {
    const fileToBeUploaded = e.target.files[0];
    setUploadedImage(fileToBeUploaded.name);

    const imageUploadedRef = firebase
      .storage()
      .ref()
      .child(`images/${fileToBeUploaded.name}`);

    const metadata = { contentType: "image/jpeg/png" };
    imageUploadedRef
      .put(fileToBeUploaded, metadata)
      .then(() => imageUploadedRef.getDownloadURL())
      .then((result) => setUploadedImageURL(result));
  };

  //Main component render starts here
  return (
    <>
      {addedBlog && <Redirect to="/" />}
      {loading ? (
        <LoaderComponent />
      ) : (
        <AddBlogFormContainer>
          {error && <Messages>{error}</Messages>}
          <InputComponent
            placeholder="Author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <InputComponent
            placeholder="Enter Blog Category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <InputComponent
            placeholder="Enter Sub Category"
            name="subcategory"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          />

          <InputComponent
            placeholder="Enter Blog Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <InputComponent
            placeholder="Blog Synopsis - Max 200 words"
            name="blogSynopsis"
            maxLength="150"
            value={blogSynopsis}
            onChange={handleBlogSynopsis}
            id="blog-synopsis"
          />

          <LabelComponent htmlFor="blogSynopsis">
            {blogSynopsis.length
              ? `${150 - parseInt(blogSynopsis.length)} characters left`
              : ""}
          </LabelComponent>

          <EditorContainer>
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
            />
          </EditorContainer>

          <ImageInputContainer>
            <ImageInputButtonDiv>
              <LabelComponent htmlFor="imageInput">UPLOAD</LabelComponent>
              <span>
                {uploadedImageURL && `${uploadedImage} uploaded successfully`}{" "}
              </span>
              <InputComponent
                type="file"
                onChange={handleImageUpload}
                id="imageInput"
              />
            </ImageInputButtonDiv>
            <div>
              <img src={`${uploadedImageURL}`} alt="" />
            </div>
          </ImageInputContainer>

          <PublishButtonContainer>
            <ButtonComponent
              type="submit"
              onClick={handleDraft}
              theme="secondary"
            >
              SAVE AS DRAFT
            </ButtonComponent>

            <ButtonComponent
              type="submit"
              onClick={handlePublish}
              theme="primary"
            >
              PUBLISH
            </ButtonComponent>
          </PublishButtonContainer>
        </AddBlogFormContainer>
      )}
    </>
  );
};

export default AddBlogForm;
