import "./editor.css";

const Editor = () => {
  return (
    <div id="editor" className="editor">
      <label htmlFor="editor" className="editor__label">
        Markdown
      </label>
      <textarea className="editor__input" name="editor" id="editor" />
    </div>
  );
};

export default Editor;
