import React, { useState, useRef, useEffect } from "react";
import { fileSystem } from "../../data/resumeData";
import emailjs from "@emailjs/browser";

const NEOFETCH_HTML = `
<pre style="color: #60a5fa; line-height: 1.1; font-family: 'Courier New', Courier, monospace; font-size: 11px; margin: 8px 0; text-shadow: 0 0 10px rgba(96,165,250,0.4);">
 ____  _                                  
/ ___|| |__   ___  _   _ _ __ _   _  __ _ 
\\___ \\| '_ \\ / _ \\| | | | '__| | | |/ _\` |
 ___) | | | | (_) | |_| | |  | |_| | (_| |
|____/|_| |_|\\___/ \\__,_|_|   \\__, |\\__,_|
                               |___/       
<span style="color: #94a3b8;">Full-Stack Developer  |  Competitive Programmer</span>
</pre>
`;

const AITypewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <span style={{ color: "#e9d5ff" }}>{displayedText}</span>;
};

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: "output", text: NEOFETCH_HTML, isHtml: true },
    { type: "output", text: "Welcome to ShouryaOS Terminal v1.0.0" },
    { type: "output", text: 'Type "help" to see available commands.' },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [contactMode, setContactMode] = useState(false);
  const [contactStep, setContactStep] = useState(0); // 0: name, 1: email, 2: subject, 3: message, 4: ready
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transProgress, setTransProgress] = useState(0);

  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "auto" });
  }, [history, input, contactMode, contactStep, isTransmitting]);

  const sendEmail = () => {
    setIsTransmitting(true);
    setTransProgress(0);

    // Simulate transmission animation
    const interval = setInterval(() => {
      setTransProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // EmailJS call matching the template: {{subject}}, {{name}}, {{email}}, {{message}}, {{time}}
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: contactData.name,
          email: contactData.email,
          subject: contactData.subject,
          message: contactData.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setTimeout(() => {
          setIsTransmitting(false);
          setContactMode(false);
          setHistory((prev) => [
            ...prev,
            {
              type: "output",
              text: `<div style="color: #10b981; font-weight: bold; margin: 10px 0;">[ SUCCESS ] Message transmitted successfully via encrypted channel.</div>`,
              isHtml: true,
            },
          ]);
          setContactData({ name: "", email: "", subject: "", message: "" });
          setContactStep(0);
        }, 1500);
      })
      .catch(() => {
        setTimeout(() => {
          setIsTransmitting(false);
          setContactMode(false);
          setHistory((prev) => [
            ...prev,
            {
              type: "output",
              text: `<div style="color: #ef4444; font-weight: bold; margin: 10px 0;">[ ERROR ] Transmission failed. Check credentials in .env file.</div>`,
              isHtml: true,
            },
          ]);
          setContactStep(0);
        }, 1500);
      });
  };

  const handleContactInput = (e) => {
    if (e.key === "Enter") {
      const val = input.trim();
      if (!val && contactStep < 3) return;

      const newHistory = [
        ...history,
        { type: "output", text: `${getContactPrompt(contactStep)} ${val}` },
      ];
      setHistory(newHistory);
      setInput("");

      if (contactStep === 0) {
        setContactData({ ...contactData, name: val });
        setContactStep(1);
      } else if (contactStep === 1) {
        setContactData({ ...contactData, email: val });
        setContactStep(2);
      } else if (contactStep === 2) {
        setContactData({ ...contactData, subject: val });
        setContactStep(3);
      } else if (contactStep === 3) {
        setContactData({ ...contactData, message: val });
        setContactStep(4);
      }
    }
  };

  const getContactPrompt = (step) => {
    if (step === 0) return "[ CONTACT ] Enter your Name:";
    if (step === 1) return "[ CONTACT ] Enter your Email:";
    if (step === 2) return "[ CONTACT ] Enter Subject:";
    if (step === 3) return "[ CONTACT ] Enter your Message:";
    return "";
  };

  const COMMANDS = [
    "help", "clear", "ls", "cat", "whoami", "neofetch", "contact",
    "ask", "social", "open", "date", "weather", "echo", "history", "sudo",
  ];

  const OPEN_TARGETS = ["github", "linkedin", "portfolio", "vortex", "codeclash", "solveiq"];

  const handleCommand = (e) => {
    if (contactMode) {
      handleContactInput(e);
      return;
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const parts = input.split(" ");
      const mainCmd = parts[0]?.toLowerCase();

      // If typing the first word → autocomplete commands
      if (parts.length <= 1) {
        const prefix = input.toLowerCase();
        const matches = COMMANDS.filter((c) => c.startsWith(prefix));
        if (matches.length === 1) {
          setInput(matches[0]);
        } else if (matches.length > 1) {
          // Find longest common prefix among matches
          let common = matches[0];
          for (const m of matches) {
            while (!m.startsWith(common)) {
              common = common.slice(0, -1);
            }
          }
          if (common.length > prefix.length) {
            setInput(common);
          }
          setHistory((prev) => [
            ...prev,
            { type: "input", text: `shourya@portfolio:~$ ${input}` },
            {
              type: "output",
              text: matches
                .map(
                  (c) =>
                    `<span style="color:#8b5cf6;font-weight:bold">${c}</span>`,
                )
                .join("  "),
              isHtml: true,
            },
          ]);
        }
        return;
      }

      // If typing a second argument → autocomplete based on command
      const argPrefix = parts.slice(1).join(" ").toLowerCase();

      if (mainCmd === "cat") {
        const fileNames = Object.keys(fileSystem);
        const matches = fileNames.filter((f) =>
          f.toLowerCase().startsWith(argPrefix),
        );
        if (matches.length === 1) {
          setInput(`${mainCmd} ${matches[0]}`);
        } else if (matches.length > 1) {
          let common = matches[0];
          for (const m of matches) {
            while (!m.startsWith(common)) {
              common = common.slice(0, -1);
            }
          }
          if (common.length > argPrefix.length) {
            setInput(`${mainCmd} ${common}`);
          }
          setHistory((prev) => [
            ...prev,
            { type: "input", text: `shourya@portfolio:~$ ${input}` },
            {
              type: "output",
              text: matches
                .map(
                  (f) =>
                    `<span style="color:#8b5cf6;font-weight:bold">${f}</span>`,
                )
                .join("  "),
              isHtml: true,
            },
          ]);
        }
        return;
      }

      if (mainCmd === "open") {
        const matches = OPEN_TARGETS.filter((t) =>
          t.startsWith(argPrefix),
        );
        if (matches.length === 1) {
          setInput(`${mainCmd} ${matches[0]}`);
        } else if (matches.length > 1) {
          let common = matches[0];
          for (const m of matches) {
            while (!m.startsWith(common)) {
              common = common.slice(0, -1);
            }
          }
          if (common.length > argPrefix.length) {
            setInput(`${mainCmd} ${common}`);
          }
          setHistory((prev) => [
            ...prev,
            { type: "input", text: `shourya@portfolio:~$ ${input}` },
            {
              type: "output",
              text: matches
                .map(
                  (t) =>
                    `<span style="color:#8b5cf6;font-weight:bold">${t}</span>`,
                )
                .join("  "),
              isHtml: true,
            },
          ]);
        }
        return;
      }
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const prevIndex = historyIndex - 1;
        setHistoryIndex(prevIndex);
        setInput(commandHistory[commandHistory.length - 1 - prevIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Enter") {
      const cmd = input.trim();
      setInput("");
      setHistoryIndex(-1);

      const newHistory = [
        ...history,
        { type: "input", text: `shourya@portfolio:~$ ${cmd}` },
      ];

      if (!cmd) {
        setHistory(newHistory);
        return;
      }

      const newCmdHistory = [...commandHistory, cmd];
      setCommandHistory(newCmdHistory);

      const args = cmd.split(" ");
      const mainCmd = args[0].toLowerCase();

      let output = "";
      let isHtml = false;

      switch (mainCmd) {
        case "help":
          output = `Available commands:
  <span style="color:#3b82f6;font-weight:bold">help</span>      - Show this message
  <span style="color:#3b82f6;font-weight:bold">clear</span>     - Clear terminal
  <span style="color:#3b82f6;font-weight:bold">ls</span>        - List files
  <span style="color:#3b82f6;font-weight:bold">cat</span>       - Read a file (e.g., cat about.txt)
  <span style="color:#3b82f6;font-weight:bold">whoami</span>    - Print current user
  <span style="color:#3b82f6;font-weight:bold">neofetch</span>  - Show system information
  <span style="color:#3b82f6;font-weight:bold">contact</span>   - Send me a message
  <span style="color:#3b82f6;font-weight:bold">ask</span>       - Ask the AI Assistant
  <span style="color:#3b82f6;font-weight:bold">social</span>    - Show social links
  <span style="color:#3b82f6;font-weight:bold">open</span>      - Open a URL (e.g., open github)
  <span style="color:#3b82f6;font-weight:bold">date</span>      - Show current date/time
  <span style="color:#3b82f6;font-weight:bold">weather</span>   - Show current weather
  <span style="color:#3b82f6;font-weight:bold">echo</span>      - Print arguments
  <span style="color:#3b82f6;font-weight:bold">history</span>   - Show command history`;
          isHtml = true;
          break;
        case "clear":
          setHistory([]);
          return;
        case "ls":
          output = Object.keys(fileSystem)
            .map(
              (f) => `<span style="color:#8b5cf6;font-weight:bold">${f}</span>`,
            )
            .join("  ");
          isHtml = true;
          break;
        case "cat":
          if (args.length < 2) {
            output =
              'cat: missing file operand\nTry "ls" to see available files.';
          } else {
            const fileName = args[1];
            if (fileSystem[fileName]) {
              output = fileSystem[fileName];
            } else {
              output = `cat: ${fileName}: No such file or directory`;
            }
          }
          break;
        case "whoami":
          output = "shourya_bafna\n(Full-Stack Developer)";
          break;
        case "sudo":
          output =
            '<span style="color:#ef4444">Shourya is not in the sudoers file. This incident will be reported.</span>';
          isHtml = true;
          break;
        case "neofetch":
          output = NEOFETCH_HTML;
          isHtml = true;
          break;
        case "contact":
          setContactMode(true);
          setContactStep(0);
          setHistory([
            ...newHistory,
            {
              type: "output",
              text: '<div style="color: #10b981; font-weight: bold;">[ INIT ] Starting Secure Communication Protocol...</div>',
              isHtml: true,
            },
          ]);
          return;
        case "ask":
          const question = args.slice(1).join(" ").toLowerCase();
          if (!question) {
            output =
              'Usage: ask <your question>\nExample: ask "What are your skills?"';
          } else {
            let aiAnswer = "";
            if (question.includes("project")) {
              aiAnswer =
                "Shourya has built Vortex (AI Study Assistant), Code Clash (Coding Platform), and SolveIQ. Check the Browser for demos!";
            } else if (
              question.includes("skill") ||
              question.includes("tech")
            ) {
              aiAnswer =
                "He specializes in React, Next.js, Node.js, and AI technologies like ML, LangChain, LangGraph, and RAG. He's also a competitive programmer (1200+ CF rating).";
            } else if (
              question.includes("experience") ||
              question.includes("work")
            ) {
              aiAnswer =
                "Currently a Full Stack Intern at Rashtram AI. Previously at Get Interview Confidence.";
            } else if (
              question.includes("who") ||
              question.includes("shourya")
            ) {
              aiAnswer =
                "Shourya Bafna is a high-performance Full-Stack Developer and Competitive Programmer. He loves building AI-powered tools and scalable web applications.";
            } else {
              aiAnswer =
                "I'm Shourya's assistant. Ask me about his projects, skills, or experience!";
            }
            setHistory([...newHistory, { type: "ai-output", text: aiAnswer }]);
            return;
          }
          break;
        case "social":
          output = `<div style="margin:4px 0">
  <div style="color:#10b981;font-weight:bold;margin-bottom:8px">🔗 Social Links</div>
  <div><span style="color:#60a5fa">▸</span> GitHub    → <span style="color:#94a3b8">github.com/shourya2006</span></div>
  <div><span style="color:#a78bfa">▸</span> LinkedIn  → <span style="color:#94a3b8">linkedin.com/in/shourya-bafna-80a670215/</span></div>
  <div><span style="color:#f472b6">▸</span> Portfolio → <span style="color:#94a3b8">shouryabafna.dev</span></div>
  <div style="color:#64748b;margin-top:8px;font-size:12px">Type "open github", "open linkedin", or "open portfolio"</div>
</div>`;
          isHtml = true;
          break;
        case "open":
          const target = args[1]?.toLowerCase();
          const urls = {
            github: "https://github.com/shourya2006",
            linkedin: "https://www.linkedin.com/in/shourya-bafna-80a670215/",
            portfolio: "https://shouryabafna.dev",
            vortex: "https://vortex-jet.vercel.app/",
            codeclash: "https://codeclash-1-bq57.onrender.com/",
            solveiq: "https://solveiq.shouryabafna.dev/",
          };
          if (!target) {
            output =
              "Usage: open <site>\nAvailable: github, linkedin, portfolio, vortex, codeclash, solveiq";
          } else if (urls[target]) {
            window.open(urls[target], "_blank");
            output = `Opening ${target}...`;
          } else {
            output = `Unknown site: ${target}\nAvailable: github, linkedin, portfolio, vortex, codeclash, solveiq`;
          }
          break;
        case "date":
          output = new Date().toString();
          break;
        case "weather":
          output = "Fetching weather...\n🌤️ Sunny, 24°C / 75°F\nWind: 12 km/h";
          break;
        case "echo":
          output = args.slice(1).join(" ");
          break;
        case "history":
          output = newCmdHistory.map((c, i) => `  ${i + 1}  ${c}`).join("\n");
          break;
        default:
          output = `<span style="color:#ef4444">Command not found: ${mainCmd}</span>\nType "help" for available commands.`;
          isHtml = true;
      }

      setHistory([...newHistory, { type: "output", text: output, isHtml }]);
    }
  };

  return (
    <div
      className="selectable"
      style={{
        backgroundColor: "var(--terminal-bg)",
        color: "#cbd5e1",
        fontFamily: "var(--font-mono)",
        fontSize: "14px",
        padding: "16px",
        height: "100%",
        overflowY: "auto",
        textShadow: "0 0 2px rgba(255,255,255,0.3)",
        boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
        position: "relative",
      }}
      onClick={() => inputRef.current?.focus()}
    >
      {history.map((line, i) => (
        <div key={i} style={{ marginBottom: "4px", whiteSpace: "pre-wrap" }}>
          {line.type === "input" ? (
            <span>
              <span style={{ color: "#10b981", fontWeight: "bold" }}>
                shourya
              </span>
              <span style={{ color: "#94a3b8" }}>@</span>
              <span style={{ color: "#3b82f6", fontWeight: "bold" }}>
                portfolio
              </span>
              <span style={{ color: "#cbd5e1" }}>:~$ </span>
              <span style={{ color: "#f8fafc" }}>
                {line.text.replace("shourya@portfolio:~$ ", "")}
              </span>
            </span>
          ) : line.type === "ai-output" ? (
            <div style={{ display: "flex", gap: "10px", margin: "5px 0" }}>
              <div
                style={{
                  color: "#a78bfa",
                  fontWeight: "bold",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                }}
              >
                [ AI ]:
              </div>
              <AITypewriter text={line.text} />
            </div>
          ) : line.isHtml ? (
            <span dangerouslySetInnerHTML={{ __html: line.text }} />
          ) : (
            <span>{line.text}</span>
          )}
        </div>
      ))}

      {/* Contact Mode Interface */}
      {contactMode && !isTransmitting && (
        <div style={{ marginTop: "10px" }}>
          {contactStep < 4 ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ color: "#10b981", marginRight: "10px" }}>
                {getContactPrompt(contactStep)}
              </span>
              <span style={{ color: "#f8fafc", whiteSpace: "pre" }}>
                {input}
              </span>
              <span className="cursor" />
            </div>
          ) : (
            <div
              style={{
                background: "rgba(16,185,129,0.1)",
                padding: "15px",
                borderRadius: "8px",
                border: "1px solid rgba(16,185,129,0.3)",
                margin: "15px 0",
              }}
            >
              <div
                style={{
                  color: "#10b981",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                [ READY ] Verify Details:
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#94a3b8",
                  marginBottom: "4px",
                }}
              >
                Name:{" "}
                <span style={{ color: "#f1f5f9" }}>{contactData.name}</span>
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#94a3b8",
                  marginBottom: "4px",
                }}
              >
                Email:{" "}
                <span style={{ color: "#f1f5f9" }}>{contactData.email}</span>
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#94a3b8",
                  marginBottom: "4px",
                }}
              >
                Subject:{" "}
                <span style={{ color: "#f1f5f9" }}>{contactData.subject}</span>
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#94a3b8",
                  marginBottom: "12px",
                }}
              >
                Message:{" "}
                <span style={{ color: "#f1f5f9" }}>{contactData.message}</span>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={sendEmail}
                  style={{
                    background: "#10b981",
                    border: "none",
                    color: "#000",
                    padding: "6px 16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                >
                  SEND MESSAGE
                </button>
                <button
                  onClick={() => {
                    setContactMode(false);
                    setContactStep(0);
                  }}
                  style={{
                    background: "transparent",
                    border: "1px solid #475569",
                    color: "#94a3b8",
                    padding: "6px 16px",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                >
                  CANCEL
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Transmission Animation */}
      {isTransmitting && (
        <div
          style={{
            margin: "20px 0",
            padding: "15px",
            background: "rgba(0,0,0,0.4)",
            borderRadius: "8px",
            border: "1px dashed #10b981",
          }}
        >
          <div
            style={{
              color: "#10b981",
              fontWeight: "bold",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>TRANSMITTING ENCRYPTED PACKETS...</span>
            <span>{Math.floor(transProgress)}%</span>
          </div>
          <div
            style={{
              height: "10px",
              width: "100%",
              background: "#0f172a",
              borderRadius: "5px",
              overflow: "hidden",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${transProgress}%`,
                background: "#10b981",
                transition: "width 0.1s linear",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "10px",
              color: "#64748b",
              fontFamily: "monospace",
              overflow: "hidden",
              height: "1.2em",
            }}
          >
            {Array.from({ length: 20 })
              .map(() => Math.random().toString(16).slice(2, 8))
              .join(" ")}
          </div>
        </div>
      )}

      {/* Normal Prompt */}
      {!contactMode && !isTransmitting && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <span
            style={{
              color: "#10b981",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            shourya
          </span>
          <span style={{ color: "#94a3b8", whiteSpace: "nowrap" }}>@</span>
          <span
            style={{
              color: "#3b82f6",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            portfolio
          </span>
          <span
            style={{
              color: "#cbd5e1",
              marginRight: "8px",
              whiteSpace: "nowrap",
            }}
          >
            :~$
          </span>
          <span style={{ color: "#f8fafc", whiteSpace: "pre" }}>{input}</span>
          <span className="cursor" />
        </div>
      )}

      <div ref={endRef} style={{ height: "20px" }} />

      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleCommand}
        style={{
          position: "absolute",
          opacity: 0,
          width: "1px",
          height: "1px",
          bottom: 0,
          left: 0,
          pointerEvents: "none",
        }}
        autoFocus
        spellCheck="false"
        autoComplete="off"
      />

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background-color: #f8fafc;
          animation: blink 1s step-end infinite;
          margin-left: 1px;
          vertical-align: middle;
        }
      `}</style>
    </div>
  );
}
