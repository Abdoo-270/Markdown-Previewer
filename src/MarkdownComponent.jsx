import React from "react";
import { marked } from "marked";

const MarkdownComponent = ({ markdownContent }) => {
  const getMarkdownHtml = () => {
    marked.setOptions({
      gfm: true, // Enable GitHub flavored Markdown
      breaks: true, // Enable line breaks
      sanitize: true, // Sanitize HTML tags
      smartLists: true, // Enable smart lists
      smartypants: true, // Enable smart punctuation
      renderer: new marked.Renderer(),
    });

    const htmlContent = marked(markdownContent);
    const htmlWithLineBreaks = htmlContent.replace(/\n/g, "<br>");

    return htmlWithLineBreaks;
  };

  return <div dangerouslySetInnerHTML={{ __html: getMarkdownHtml() }}></div>;
};

export default MarkdownComponent;
