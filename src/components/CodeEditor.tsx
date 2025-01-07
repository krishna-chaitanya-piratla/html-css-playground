import { basicSetup, EditorState } from "@codemirror/basic-setup";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { EditorView, ViewUpdate } from "@codemirror/view";
import { useEffect, useRef } from "react";
import { Editor } from "../styles/CodeEditorStyles";


interface CodeEditorProps {
    initialCode?: string;
    language: "html" | "css";
    onChange?: (newCode: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({initialCode = "", language, onChange }) => {
    const editorRef = useRef<HTMLDivElement | null>(null);
    const viewRef = useRef<EditorView | null>(null);
    
    const handleUpdate = (update: ViewUpdate) => {
        if (update.docChanged && onChange) {
            const newCode = update.state.doc.toString();
            onChange(newCode);
        }
    };

    useEffect(() => {
        if (!editorRef.current) {
            return;
        }

        if (editorRef.current.children.length > 0) {
            return;
        }

        const extensions = [
            basicSetup,
            EditorView.updateListener.of(handleUpdate),
            language === "html" ? html() : css() 
        ];

        const startState = EditorState.create({
            doc: initialCode,
            extensions
        });

        viewRef.current = new EditorView({
            state: startState,
            parent: editorRef.current,
        });

        return () => {
            if (viewRef.current) {
                viewRef.current.destroy();
                viewRef.current = null;
            }
        };
    }, [language]);

    return <Editor ref={editorRef}></Editor>
};

export default CodeEditor;