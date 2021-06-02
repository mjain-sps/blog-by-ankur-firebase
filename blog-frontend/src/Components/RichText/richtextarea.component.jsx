import React from "react";
import { Editor } from "draft-js";
import { RichTextAreaMain } from "./richtextarea.styles.js";
class RichTextEditor extends React.Component {
  render() {
    const { onClick, ref, editorState, onChange } = this.props;
    return (
      <RichTextAreaMain onClick={onClick}>
        <Editor ref={ref} editorState={editorState} onChange={onChange} />
      </RichTextAreaMain>
    );
  }
}

export default RichTextEditor;
