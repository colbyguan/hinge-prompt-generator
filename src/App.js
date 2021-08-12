import "./App.css";
import { PROMPTS } from "./constants";
import { useState } from "react";
import like from "./like-icon.png";
import reference from "./reference.png";

function App() {
  const [showLike, setShowLike] = useState(true);
  const [chosenPrompt, setChosenPrompt] = useState("");
  const [customPrompt, setCustomPrompt] = useState("Worst idea I've ever had");
  const [response, setResponse] = useState(
    "Opening a bottle of wine with a drill. 🤦🏽‍♀️"
  );
  const [width, setWidth] = useState(464);

  const prompt = customPrompt.length > 0 ? customPrompt : chosenPrompt;

  return (
    <div className="App">
      <div className="container mx-auto max-w-3xl">
        <div className="py-10">
          <div className="relative text-2xl mb-4 ">
            Hinge prompt screenshot generator
            <div
              data-tip="the fonts aren't the same since the Hinge app uses licensed fonts, so the closest free versions I could find are here"
              className="z-10 absolute right-0 top-0 tooltip tooltip-left"
            >
              <button className="btn btn-sm btn-outline">?</button>
            </div>
          </div>
          <div className="relative z-0 p-10 card bg-base-200">
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Choose one of Hinge's prompts:
                </span>
              </label>
              <select
                onChange={(e) => {
                  setCustomPrompt("");
                  setChosenPrompt(e.target.value);
                }}
                defaultValue="first"
                className="select select-bordered w-full max-w-xs"
              >
                <option id="first" disabled="disabled">
                  Choose prompt
                </option>
                {PROMPTS.sort().map((p) => (
                  <option key={p}>{p.trim()}</option>
                ))}
              </select>
              <div className="h-4"></div>

              <div className="flex flex-row">
                <label className="label">
                  <span className="label-text">
                    <span>Or write custom prompt:</span>
                  </span>
                </label>
                <button
                  onClick={(e) => setCustomPrompt("")}
                  className="btn btn-outline btn-xs my-2 mx-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-4 h-4 mr-1 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  Clear
                </button>
              </div>
              <input
                type="text"
                onChange={(e) => setCustomPrompt(e.target.value)}
                value={customPrompt}
                placeholder="prompt"
                className="input input-primary input-bordered"
              />

              <div className="h-4"></div>
              <div className="flex flex-row">
                <label className="label">
                  <span className="label-text">
                    <span className="mr-2">Response</span>
                  </span>
                </label>
                <button
                  onClick={(e) => setResponse("")}
                  className="btn btn-outline btn-xs my-2 mx-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-4 h-4 mr-1 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  Clear
                </button>
              </div>
              <input
                onChange={(e) => setResponse(e.target.value)}
                value={response}
                type="text"
                placeholder="response"
                className="input input-accent input-bordered"
              />

              <div className="h-4"></div>
              <label className="label">
                <span className="label-text">Width: {width}</span>
              </label>
              <input
                onChange={(e) => setWidth(parseInt(e.target.value))}
                type="range"
                min="300"
                max="1000"
                value={width}
                className="range"
              />

              <div className="h-4"></div>
              <label className="label">
                <span className="label-text">Show like button</span>
              </label>
              <input
                checked={showLike}
                onChange={() => setShowLike(!showLike)}
                type="checkbox"
                className="toggle"
              />

              <div className="h-4"></div>
              <label className="label">
                <span className="label-text">
                  <div className="italic">
                    To screenshot: <kbd>Windows</kbd>+<kbd>Shift</kbd>+
                    <kbd>S</kbd> or<kbd>Command</kbd>+<kbd>Ctrl</kbd>+
                    <kbd>Shift</kbd>+<kbd>4</kbd>
                  </div>
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div
            style={{ width: width }}
            className="mx-10 bg-white card pb-3 hinge-shadow"
          >
            <div className="pt-20 pb-16 px-8 card-body">
              <div className="mb-4 text-base text-black hinge-prompt">
                {prompt}
              </div>
              <div className="text-3xl text-black hinge-answer">{response}</div>
            </div>
            {showLike && (
              <img
                style={{ height: "70px" }}
                className="absolute bottom-3 right-3"
                src={like}
                alt="send like icon"
              />
            )}
          </div>
        </div>
        <div className="pb-24">
          <div className="p-4 border-2 border-gray-400">
            <p>Actual screenshot for comparison</p>
            <img
              style={{ height: "310px" }}
              src={reference}
              alt="reference hinge prompt screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
