import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

export default function BtcCalc() {
    const [ipt, setInput] = useState('');

    function calculate() {
        let sum = 0;
        let nChar = ipt.toString();
        let nLen = nChar.length;
        let x;

        for (let i = 0; i < nLen; i++) {

            if (nChar[i] === "0") x = 0;
            else if (nChar[i] === "1") x = 1;

            sum += x * Math.pow(2,((nLen - 1) - i));
            console.log(`Iteração ${i}`);
            console.log(`x = ${x}`);
            console.log(sum + "\n");
        }

        ReactDOM.render(sum, document.getElementById('answ'));

        console.log("Resposta: " + sum);
    }

    return (
        <div className="container">
            <div className="content">
                <div className="title">
                    <h1>Enter a BINARY number</h1>
                </div>
                <div className="input" align="middle">
                    <input
                        type="text"
                        placeholder="input up to 8 bin digits"
                        value={ipt}
                        onChange={e => setInput(e.target.value)}
                    />
                </div>
                <div className="answer">
                    <p id="answ"></p>
                </div>
            </div>
            <button onClick={calculate} className="btn-calc"><p>C A L C</p></button>
        </div>
    );
}


