import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const Wysiwyg = (props) => {
    let { editorState, onEditorStateChange } = props;

    return (
        <div className="wysiwyg">
            <Editor
                defaultEditorState={editorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    );
}

export default Wysiwyg;