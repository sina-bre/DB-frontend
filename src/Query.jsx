import "./Query.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Query = (props) => {
  const code = props.code;
  const text = props.text;
  const number = props.number;
  const navigate = useNavigate();
  const queryTextOnClickHandler = (number) => {
    navigate(`/querys/${number}`);
  };
  return (
    <>
      <div className="Query-container" dir="rtl">
        <div className="Query-container-container">
          <div className="Query-top">
            <div>
              <div className="Query-number">{number}</div>
            </div>
            <div
              className="Query-text"
              onClick={() => queryTextOnClickHandler(number)}
            >
              {text + " :"}
            </div>
          </div>
          <div
            className="Resaltbtn"
            onClick={() => queryTextOnClickHandler(number)}
          >
            Results
          </div>
        </div>
        <div className="Query-code" dir="ltr">
          <SyntaxHighlighter
            language="sql"
            style={tomorrowNight}
            showLineNumbers="true"
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};
export default Query;
