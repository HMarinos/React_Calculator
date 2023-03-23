import React from "react";
const math = require("mathjs");

function App() {
    const [output, setOutput] = React.useState("");
    const [input, setInput] = React.useState("");
    const [alert, setAlert] = React.useState("");

    const handleInput = (value) => {
        if (input.length <= 30) {
            const lastChar = input.charAt(input.length - 1);

            // checks and replaces if there are multiple operator one after another
            if (
                ((value === "/" || value === "*") &&
                    (lastChar === "/" ||
                        lastChar === "*" ||
                        lastChar === "+" ||
                        lastChar === "-")) ||
                ((value === "+" || value === "-") &&
                    (lastChar === "/" || lastChar === "*"))
            ) {
                setInput(input.slice(0, -1) + value);
            } else if (
                (value === "-" || value === "+") &&
                (lastChar === "-" || lastChar === "+")
            ) {
                setInput((prevValue) => prevValue + value);
            } else {
                setInput((prevValue) => prevValue + value);
            }
        } else {
            setAlert("LIMIT REACHED");
        }
    };

    const handleAC = () => {
        setInput("");
        setOutput("");
        setAlert("");
    };
    const HandleEqual = () => {
        if (
            /[\+\-\*\/]?\s*\d+\s*[\+\-\*\/]\s*\d+/.test(input) &&
            /[0-9]/.test(input) &&
            input !== "" &&
            input !== "*" &&
            input !== "/" &&
            input !== "+" &&
            input !== "-" &&
            input !== "."
        ) {
            setOutput(math.evaluate(input).toString());
        } else {
            // setOutput("");
            setAlert("NAN");
        }
    };
    const handleNum0 = () => {
        setInput(function (prevValue) {
            if (prevValue === "0" && prevValue.indexOf("0") === 0) {
                return "0";
            } else {
                return prevValue + "0";
            }
        });
    };
    const handleDot = () => {
        setInput(function (prevValue) {
            if (prevValue !== ".") {
                return prevValue + ".";
            } else {
                return ".";
            }
        });
    };

    const handleDivision = () => {
        handleInput("/");
    };
    const handleMultiplication = () => {
        handleInput("*");
    };
    const handleSubtract = () => {
        handleInput("-");
    };
    const handleAdd = () => {
        handleInput("+");
    };
    const handleNum7 = () => {
        handleInput("7");
    };
    const handleNum8 = () => {
        handleInput("8");
    };
    const handleNum9 = () => {
        handleInput("9");
    };
    const handleNum4 = () => {
        handleInput("4");
    };
    const handleNum5 = () => {
        handleInput("5");
    };
    const handleNum6 = () => {
        handleInput("6");
    };
    const handleNum1 = () => {
        handleInput("1");
    };
    const handleNum2 = () => {
        handleInput("2");
    };
    const handleNum3 = () => {
        handleInput("3");
    };

    return (
        <div className="calculator_container">
            <div className="calculator">
                <div className="screen">
                    <div className="alert">{alert}</div>
                    <h6>{output}</h6>
                    <h5>{input}</h5>
                </div>
                <div className="buttons">
                    <button onClick={handleAC} className="AC">
                        AC
                    </button>
                    <button onClick={handleDivision} className="divide">
                        /
                    </button>
                    <button onClick={handleMultiplication} className="multiply">
                        X
                    </button>
                    <button onClick={handleSubtract} className="subtract">
                        -
                    </button>
                    <button onClick={handleAdd} className="add">
                        +
                    </button>
                    <button onClick={HandleEqual} className="equals">
                        =
                    </button>
                    <button onClick={handleNum7} className="num num_7">
                        7
                    </button>
                    <button onClick={handleNum8} className="num num_8">
                        8
                    </button>
                    <button onClick={handleNum9} className="num num_9">
                        9
                    </button>
                    <button onClick={handleNum4} className="num num_4">
                        4
                    </button>
                    <button onClick={handleNum5} className="num num_5">
                        5
                    </button>
                    <button onClick={handleNum6} className="num num_6">
                        6
                    </button>
                    <button onClick={handleNum1} className="num num_1">
                        1
                    </button>
                    <button onClick={handleNum2} className="num num_2">
                        2
                    </button>
                    <button onClick={handleNum3} className="num num_3">
                        3
                    </button>
                    <button onClick={handleNum0} className="num num_0">
                        0
                    </button>
                    <button onClick={handleDot} className="dot">
                        .
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
