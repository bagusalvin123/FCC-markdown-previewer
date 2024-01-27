import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

// defaultMarkdown contains valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
const defaultMarkdown = `
# Selamat Datang di Markdown Previewer Bagus Alvin!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

Silahkan klik lebih lengkapnya [links](https://www.freecodecamp.com), dan
> Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- Saya Bagus Alvin dari prodi Informatika
`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
        <div className="boxes-container">
          <textarea
            name="editor"
            id="editor"
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
          ></textarea>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
