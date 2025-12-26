import { useEffect, useState } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import Header from '../../components/Header/Header';
import ToolbarPlugin from './ToolBar';
import '../../App.css';
import './Blog.css'

// 1. Move Theme and Error Handler outside the component
const theme = {
    paragraph: 'editor-paragraph',
    text: {
        bold: 'editor-text-bold',
        italic: 'editor-text-italic',
        underline: 'editor-text-underline', // This is the missing link
    },   // Add more class mapping here
};

function onError(error) {
    console.error(error);
}

export default function Blog() {
    // Use React state instead of just session storage for immediate UI updates
    const [isEditing, setIsEditing] = useState(window.sessionStorage.getItem("edit-blog") === "true");
    const ID = window.sessionStorage.getItem("userId");

    const writeBlog = () => {
        window.sessionStorage.setItem("edit-blog", "true");
        setIsEditing(true); // Updates UI without needing a full page reload
    };

    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError, // This is required!
    };

    // 2. Main Logic for what to display
    if (!ID) {
        return (
            <>
                <Header />
                <p>Please log in to see the blog.</p>
            </>
        );
    }

    if (isEditing) {
        return (
            <>
                <Header />
                <div className="editor-container">
                    <LexicalComposer initialConfig={initialConfig}>
                        <div className="editor-inner">
                            {/* 1. Add Toolbar here */}
                            <ToolbarPlugin /> 

                            <div className="editor-input-wrapper">
                                <RichTextPlugin
                                    contentEditable={<ContentEditable className="editor-input" />}
                                    placeholder={<div className="editor-placeholder">Enter text...</div>}
                                    ErrorBoundary={LexicalErrorBoundary}
                                />
                            </div>
                            <HistoryPlugin />
                            <AutoFocusPlugin />
                        </div>
                    </LexicalComposer>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <button onClick={writeBlog}>Write a new blog</button>
        </>
    );
}
