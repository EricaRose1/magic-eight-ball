import React, { useState } from "react";

import "./EightBall.css"
import defaultAnswers from "./answers.json";
import { choice } from "./answerPicker";

import ResetButton from "./Restart";

function EightBall({ answers = defaultAnswers }) {
    const [response, setResponse] =  useState({
        msg: "Think of a Question.",
        color: "black",
    });

    const [defaultResponse, setDefaultResponse] = useState(response);

    function handleClick(e) {
        setResponse(choice(answers));
    }

    function handleReset() {
        setResponse(defaultResponse);
    }

    return (
    <>
        <div
            className="EightBall"
            onClick={handleClick}
            style={{ backgroundColor: response.color }}
        >
            {response.msg}
            
        </div>
        <ResetButton handleReset={handleReset} />
            
        </>
    );
}

export default EightBall;