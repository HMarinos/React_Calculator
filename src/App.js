import React from "react";
const math = require("mathjs");

function App() {
    const [output, setOutput] = React.useState("");
    const [input, setInput] = React.useState("");

    const handleInput = (value) => {
        if (input.length < 30) {
            setInput((prevValue) => prevValue + value);
        } else {
            console.log("max");
        }
    };

    const handleAC = () => {
        setInput("");
        setOutput("");
    };
    const HandleEqual = () => {
        if (input !== "") {
            setOutput(math.evaluate(input).toString());
        } else {
            setOutput("");
        }
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
        if (input.length <= 30) {
            setInput((prevValue) => prevValue + "5");
        } else {
            console.log("max");
        }
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
        handleInput(".");
    };
    return (
        <div className="calculator_container">
            <div className="calculator">
                <div className="screen">
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
