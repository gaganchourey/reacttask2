import React, { useState } from 'react';
import './App.css';

function App() {
    const [theme, setTheme] = useState('light');
    const [input, setInput] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
      setTheme(isDarkMode ? 'light' : 'dark');
    };
  
    const handleButtonPress = (value) => {
      if (value === '=') {
        try {
          setInput(eval(input));
        } catch (error) {
          setInput('Error');
        }
      } else if (value === 'C') {
        setInput('');
      } else {
        setInput(input + value);
      }
    };
  
    return (
      <div className={`calculator ${theme}`}>
        <div className="toggle-theme">
          <label>
            <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
            Dark Mode
          </label>
        </div>
        <input type="text" className="calculator-screen" value={input} readOnly />
        <div className="calculator-keys">
          <div className="calculator-keys-row">
            <button onClick={() => handleButtonPress('7')}>7</button>
            <button onClick={() => handleButtonPress('8')}>8</button>
            <button onClick={() => handleButtonPress('9')}>9</button>
            <button onClick={() => handleButtonPress('+')}>+</button>
          </div>
          <div className="calculator-keys-row">
            <button onClick={() => handleButtonPress('4')}>4</button>
            <button onClick={() => handleButtonPress('5')}>5</button>
            <button onClick={() => handleButtonPress('6')}>6</button>
            <button onClick={() => handleButtonPress('-')}>-</button>
          </div>
          <div className="calculator-keys-row">
            <button onClick={() => handleButtonPress('1')}>1</button>
            <button onClick={() => handleButtonPress('2')}>2</button>
            <button onClick={() => handleButtonPress('3')}>3</button>
            <button onClick={() => handleButtonPress('*')}>*</button>
          </div>
          <div className="calculator-keys-row">
            <button onClick={() => handleButtonPress('0')}>0</button>
            <button onClick={() => handleButtonPress('.')}>.</button>
            <button onClick={() => handleButtonPress('=')}>=</button>
            <button onClick={() => handleButtonPress('/')}>/</button>
          </div>
          <div className="calculator-keys-row">
            <button onClick={() => handleButtonPress('C')}>C</button>
          </div>
        </div>
      </div>
    );
  }

export default App;