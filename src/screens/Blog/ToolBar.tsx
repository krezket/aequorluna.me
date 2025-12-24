import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_TEXT_COMMAND } from 'lexical';

export default function ToolbarPlugin() {
    const [editor] = useLexicalComposerContext();

    const onClick = (command) => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, command);
    };

    return (
        <div className="toolbar">
            <button onClick={() => onClick('bold')} className="toolbar-item">
                <b>B</b>
            </button>
            <button onClick={() => onClick('italic')} className="toolbar-item">
                <i>I</i>
            </button>
            <button onClick={() => onClick('underline')} className="toolbar-item">
                <u>U</u>
            </button>
        </div>
    );
}
