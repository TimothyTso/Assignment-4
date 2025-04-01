import { useState } from 'react';
import './Components.css';

function ambiguousCase() {
    const [rangleA, setA] = useState();
    const [sideA, setB] = useState();
    const [sideB, setC] = useState();
    const [tritype, setTri] = useState("Press Calculate");

    function ambigCase(e) {
        e.preventDefault();
        let angleA = rangleA * Math.PI / 180;
        let h = sideB * Math.sin(angleA);
        console.log(rangleA, angleA, h, sideA, sideB);
        if (angleA <= 90) { //acute
            if (sideA < h) {
                setTri("No triangle");
            } else if (sideA == h) {
                setTri("Right triangle");
            } else if (sideA >= sideB) {
                setTri("One triangle");
            } else if (h < sideA < sideB) {
                setTri("Two triangles (ambiguous case)");
            }
        } else if (180 > angleA > 90) { //obtus
            if (sideA < sideB || sideB === sideA) {
                setTri("No triangle");
            } else if (sideA > sideB) {
                setTri("One triangle");
            }
        } else {
            setTri("error");
        }
    }

    return (
        <form onSubmit={(e) => ambigCase(e)}>
            <h1 class="header">Ambiguous Case</h1>
            <label>Angle A: </label>
            <input type="number" value={rangleA} onChange={(event) => { setA(event.target.value) }} required />
            <label>Side A: </label>
            <input type="number" value={sideA} onChange={(event) => { setB(event.target.value) }} required />
            <label>Side B: </label>
            <input type="number" value={sideB} onChange={(event) => { setC(event.target.value) }} required />
            <label>Triangle Type</label>
            <input type="text" value={tritype} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    )
}

export default ambiguousCase;