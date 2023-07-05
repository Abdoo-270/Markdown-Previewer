import { useState, useEffect } from "react";
import { marked } from "marked";

import Footer from "./Footer";
import MarkdownComponent from "./MarkdownComponent";
function App() {
  const placeholder = `# Heading 1

## Heading 2

[Link](https://example.com)

Inline code: \`console.log("Hello, World!");\`

\`\`\`javascript
function example() {
  // Code goes here
}
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote

![Image](https://example.com/image.jpg)

**Bolded Text**
`;
  const [editorInput, setEditorInput] = useState(placeholder);
  const [previewHtml, setPreviewHtml] = useState("");

  const handleInputChange = (event) => {
    setEditorInput(event.target.value);
  };
  return (
    <>
      <main>
        <h1>Markdown Previewer</h1>
        <div className="container">
          <textarea
            id="editor"
            value={editorInput}
            onChange={handleInputChange}
          ></textarea>
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: `${marked(editorInput, { breaks: true })}`,
            }}
          >
            {}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
