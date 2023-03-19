import React from "react";
const math = require("mathjs");

function App() {
    const [output, setOutput] = React.useState("");

    const handleAC = () => {
        setOutput("");
    };
    const HandleEqual = () => {
        setOutput((prevOutput) => math.evaluate(prevOutput));
    };
    const handleDivision = () => {
        setOutput((prevValue) => prevValue + "/");
    };
    const handleMultiplication = () => {
        setOutput((prevValue) => prevValue + "*");
    };
    const handleSubtract = () => {
        setOutput((prevValue) => prevValue + "-");
    };
    const handleAdd = () => {
        setOutput((prevValue) => prevValue + "+");
    };
    const handleNum7 = () => {
        setOutput((prevValue) => prevValue + "7");
    };
    const handleNum8 = () => {
        setOutput((prevValue) => prevValue + "8");
    };
    const handleNum9 = () => {
        setOutput((prevValue) => prevValue + "9");
    };
    const handleNum4 = () => {
        setOutput((prevValue) => prevValue + "4");
    };
    const handleNum5 = () => {
        setOutput((prevValue) => prevValue + "5");
    };
    const handleNum6 = () => {
        setOutput((prevValue) => prevValue + "6");
    };
    const handleNum1 = () => {
        setOutput((prevValue) => prevValue + "1");
    };
    const handleNum2 = () => {
        setOutput((prevValue) => prevValue + "2");
    };
    const handleNum3 = () => {
        setOutput((prevValue) => prevValue + "3");
    };
    const handleNum0 = () => {
        setOutput(function (prevValue) {
            if (prevValue === "0" && prevValue.indexOf("0") === 0) {
                return "0";
            } else {
                return prevValue + "0";
            }
        });
    };
    const handleDot = () => {
        setOutput((prevValue) => prevValue + ".");
    };
    return (
        <div className="calculator_container">
            <div className="calculator">
                <div className="screen">
                    <h5>{output}</h5>
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
