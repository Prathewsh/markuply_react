import { useEffect, useRef } from "react";

export default function CodeEditor() {
  const htmlRef = useRef();
  const cssRef = useRef();
  const jsRef = useRef();
  const outputRef = useRef();
  const consoleOutRef = useRef();

  useEffect(() => {
    const compile = () => {
      const userHTML = htmlRef.current.value;
      const userCSS = cssRef.current.value;
      const userJS = jsRef.current.value;

      const code = `
<html>
<head>
  <style>${userCSS}</style>
</head>
<body>
  ${userHTML}
  <script>
    window.console.log = (msg) => parent.postMessage({ type: 'log', msg }, '*');
    window.console.warn = (msg) => parent.postMessage({ type: 'warn', msg }, '*');
    window.console.error = (msg) => parent.postMessage({ type: 'error', msg }, '*');
    try {
      ${userJS}
    } catch (err) {
      console.error(err);
    }
  <\/script>
</body>
</html>`;
      outputRef.current.srcdoc = code;
    };

    const handleConsoleMsg = (event) => {
      const { type, msg } = event.data;
      const div = document.createElement("div");
      div.classList.add(type); // log, warn, error
      div.textContent = msg;
      consoleOutRef.current.appendChild(div);
      consoleOutRef.current.scrollTop = consoleOutRef.current.scrollHeight;
    };

    window.addEventListener("message", handleConsoleMsg);

    htmlRef.current.addEventListener("input", compile);
    cssRef.current.addEventListener("input", compile);
    jsRef.current.addEventListener("input", compile);

    compile(); // initial compile

    return () => {
      window.removeEventListener("message", handleConsoleMsg);
    };
  }, []);

  const downloadCode = () => {
    const htmlContent = htmlRef.current.value;
    const cssContent = cssRef.current.value;
    const jsContent = jsRef.current.value;

    const fullHTML = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>${cssContent}</style>
  </head>
  <body>
    ${htmlContent}
    <script>${jsContent}<\/script>
  </body>
</html>`;

    const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/i);
    const filename =
      titleMatch && titleMatch[1].trim()
        ? `${titleMatch[1]
            .trim()
            .replace(/[^a-z0-9]/gi, "_")
            .toLowerCase()}.html`
        : "markuply-preview.html";

    const blob = new Blob([fullHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body, html { margin: 0; padding: 0; }

        .main {
          display: flex;
          height: 100vh;
          background: #111;
          color: #f1f1f1;
          font-family: "Segoe UI", sans-serif;
        }

        .editor {
          width: 50%;
          display: flex;
          flex-direction: column;
          padding: 1rem;
          gap: 3rem;
          background-color: #181818;
          overflow-y: auto;
        }

        .editor label {
          font-weight: bold;
          margin-bottom: 0.3rem;
        }

        textarea {
          width: 100%;
          height: 150px;
          resize: vertical;
          background-color: #0f0f0f;
          color: #eee;
          font-family: monospace;
          padding: 0.75rem;
          border: 1px solid #333;
          border-radius: 6px;
        }

        .preview {
          flex: 1;
          border-left: 2px solid #222;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        iframe {
          flex: 1;
          width: 100%;
          border: none;
          background: white;
        }

        .console-container {
          display: flex;
          flex-direction: column;
          background-color: #000;
          border-top: 1px solid #333;
        }

        .console-header {
          background-color: #111;
          padding: 0.5rem 1rem;
          color: #0f0;
          font-family: monospace;
          font-size: 0.85rem;
          border-bottom: 1px solid #222;
          user-select: none;
        }

        .console {
          height: 180px;
          overflow-y: auto;
          padding: 0.75rem;
          font-family: "Courier New", monospace;
          font-size: 0.9rem;
          line-height: 1.4;
          white-space: pre-wrap;
        }

        .console .log::before { content: "> "; color: #00ff88; }
        .console .log { color: #00ff88; }

        .console .warn::before { content: "⚠️ "; }
        .console .warn { color: #facc15; }

        .console .error::before { content: "❌ "; }
        .console .error { color: #ef4444; }

        .actions {
          padding: 0.5rem 1rem;
          background-color: transparent;
          display: flex;
          justify-content: flex-start;
        }

        .actions button {
          background-color: #3b82f6;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s;
        }

        .actions button:hover {
          background-color: #2563eb;
        }

        @media (max-width: 768px) {
          .main {
            flex-direction: column;
          }

          .editor, .preview {
            width: 100%;
            height: 50%;
          }

          .preview {
            border-left: none;
            border-top: 2px solid #222;
          }

          .actions {
            justify-content: center;
          }
        }
      `}</style>

      <div className="main">
        <div className="editor">
          <div>
            <label>HTML</label>
            <textarea
              ref={htmlRef}
              defaultValue={`<!DOCTYPE html>
<html>
  <head>
    <title>My Cool Page</title>
  </head>
  <body>
    <h1>Hello <span style="color:#3b82f6">Markuply!</span></h1>
    <p>This is a live code editor 🔥</p>
  </body>
</html>`}
            />
          </div>
          <div>
            <label>CSS</label>
            <textarea
              ref={cssRef}
              defaultValue={`body {
  text-align: center;
  font-family: sans-serif;
  color: #333;
}
h1 {
  color: #3b82f6;
}`}
            />
          </div>
          <div>
            <label>JavaScript</label>
            <textarea
              ref={jsRef}
              defaultValue={`// Write JS here
console.log("Hello from JS");
console.warn("This is a warning");
console.error("This is an error");`}
            />
          </div>

          <div className="actions">
            <button onClick={downloadCode}>💾 Download Code</button>
          </div>
        </div>

        <div className="preview">
          <iframe ref={outputRef} title="Live Preview" />
          <div className="console-container">
            <div className="console-header">Console for JS</div>
            <div className="console" ref={consoleOutRef}></div>
          </div>
        </div>
      </div>
    </>
  );
}
