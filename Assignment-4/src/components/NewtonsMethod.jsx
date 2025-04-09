import { useState } from 'react';
import './Components.css';

function newtonsMethod() {
    const [guess, setA] = useState();
    const [root, setRoot] = useState("Press Calulate");

    function newtMeth(e) {
        e.preventDefault();
        let x0 = guess;
        let x1 = 0;

        while (true) { 
            x1 = x0 - (6 * x0 ** 4 - 13 * x0 ** 3 - 18 * x0 ** 2 + 7 * x0 + 6) / (24 * x0 ** 3 - 39 * x0 ** 2 - 36 * x0 + 7);
            if (Math.abs(x0 - x1) < 0.001) break;
            x0 = x1;
            setRoot(Math.round(x1 * 100) / 100);
        }
    }

    return (
        <form onSubmit={(e) => newtMeth(e)}>
            <h1 class="header">Newton's Method</h1>
            <label>Guess: </label>
            <input type="number" value={guess} onChange={(event) => { setA(event.target.value) }} required />
            <label>Root Approximation: </label>
            <input type="text" value={root} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    )
}

export default newtonsMethod;