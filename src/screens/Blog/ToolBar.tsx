import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_TEXT_COMMAND, $getSelection, $isRangeSelection } from 'lexical';
import { $patchStyleText } from '@lexical/selection';
import { useState } from 'react';

export default function ToolbarPlugin() {
    const [editor] = useLexicalComposerContext();
    // Default font size state
    const [fontSize, setFontSize] = useState(15); 

    // Handle Bold, Italic, Underline
    const onClick = (command) => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, command);
    };

    // Handle Font Size Increase/Decrease
    const updateFontSize = (increment) => {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                // Calculate new size
                const newSize = increment ? fontSize + 2 : fontSize - 2;
                
                // Set limits (e.g., min 10px, max 40px)
                if (newSize >= 10 && newSize <= 40) {
                    setFontSize(newSize); 
                    
                    // Apply the new font size to the selected text
                    $patchStyleText(selection, {
                        'font-size': `${newSize}px`
                    });
                }
            }
        });
    };

    return (
        <div className="toolbar">
            {/* Standard Formats */}
            <button onClick={() => onClick('bold')} className="toolbar-item" title="Bold">
                <b>B</b>
            </button>
            <button onClick={() => onClick('italic')} className="toolbar-item" title="Italic">
                <i>I</i>
            </button>
            <button onClick={() => onClick('underline')} className="toolbar-item" title="Underline">
                <u>U</u>
            </button>

            {/* Divider */}
            <span style={{ margin: '0 8px', color: '#ccc' }}>|</span>

            {/* Font Size Controls */}
            <button 
                onClick={() => updateFontSize(false)} 
                className="toolbar-item"
                title="Decrease size"
            >
                A-
            </button>
            
            <span style={{ margin: '0 8px', fontSize: '14px', fontFamily: 'monospace' }}>
                {fontSize}px
            </span>

            <button 
                onClick={() => updateFontSize(true)} 
                className="toolbar-item"
                title="Increase size"
            >
                A+
            </button>
        </div>
    );
}
