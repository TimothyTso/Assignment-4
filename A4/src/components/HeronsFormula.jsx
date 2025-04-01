import { useState } from 'react';
import './Components.css';

function HeronsFormula() {
    const [sideA, setA] = useState();
    const [sideB, setB] = useState();
    const [sideC, setC] = useState();
    const [area, setArea] = useState("Press Calulate");

    function herformula(e) {
        e.preventDefault();
        let area = Math.round((0.25 * (Math.sqrt(4 * sideA ** 2 * sideB ** 2 - (sideA ** 2 + sideB ** 2 - sideC ** 2) ** 2))) * 100) / 100;
        setArea(area);
    }

    return (
        <form onSubmit={(e) => herformula(e)}>
            <h1 class="header">Heron's Formula</h1>
            <label for="sa">Side A: </label>
            <input type="number" value={sideA} onChange={(event) => { setA(event.target.value) }} required />
            <label for="sb">Side B: </label>
            <input type="number" value={sideB} onChange={(event) => { setB(event.target.value) }} required />
            <label for="sc">Side C: </label>
            <input type="number" value={sideC} onChange={(event) => { setC(event.target.value) }} required />
            <label for="ahf">Area:</label>
            <input type="text" value={area} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    )
}

export default HeronsFormula;