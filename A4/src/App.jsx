import { useState } from 'react';
import './App.css';
import AmbiguousCase from './components/AmbiguousCase.jsx';
import HeronsFormula from './components/HeronsFormula.jsx';
import NewtonsMethod from './components/NewtonsMethod.jsx';
import PolynomialFunction from './components/PolynomialFunction.jsx';

function App() {
  return (
    <div className="app-container">
      <HeronsFormula />
      <AmbiguousCase />
      <NewtonsMethod />
      <PolynomialFunction />
    </div>
  );
}

export default App;
