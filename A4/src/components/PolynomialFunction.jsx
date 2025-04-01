import { useState } from 'react';
import './Components.css';

function PolynomialFunction() {
    const [coEff, setA] = useState();
    const [exp, setB] = useState();
    const [xVal, setC] = useState();
    const [dispFunc, setFunc] = useState("Press Calculate");
    const [evalFunc, setEval] = useState("Press Calculate");

    function polyFunc(e) {
        e.preventDefault();
        const coeffArray = coEff.split(' ').map(Number);
        const expArray = exp.split(' ').map(Number);

        let result = 0;
        let polyFunc = "";

        for (let i = 0; i < coeffArray.length; i++) {
            result += coeffArray[i] * Math.pow(xVal, expArray[i]);
            if (coeffArray.length - i > 1) {
                polyFunc += coeffArray[i] + "x^" + expArray[i] + " + "
            } else {
                polyFunc += coeffArray[i] + "x^" + expArray[i]
            }
        }
        setFunc(polyFunc);
        setEval("f(" + xVal + ") = " + result);
    }

    return (
        <form onSubmit={(e) => polyFunc(e)}>
            <h1 class="header">Polynomial Function</h1>
            <label for="sa">Co-efficents: </label>
            <input type="text" value={coEff} onChange={(event) => { setA(event.target.value) }} required />
            <label for="sb">Exponents: </label>
            <input type="text" value={exp} onChange={(event) => { setB(event.target.value) }} required />
            <label for="sc">X value: </label>
            <input type="number" value={xVal} onChange={(event) => { setC(event.target.value) }} required />
            <label for="ahf">Polynomial Function: </label>
            <input type="text" value={dispFunc} readOnly />
            <label for="ahf">Polynomial Evaluation: </label>
            <input type="text" value={evalFunc} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    )
}

export default PolynomialFunction;
