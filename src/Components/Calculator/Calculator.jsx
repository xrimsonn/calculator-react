import React, { useState } from 'react';
import './Calculator.css';

function Calculator () {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (value) => {
    if (!isNaN(value)) {
      if (display === '0') {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
    } else {
      switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
          setPrevValue(parseFloat(display));
          setDisplay('0');
          setOperator(value);
          break;
        case '=':
          if (operator && prevValue !== null) {
            const currentValue = parseFloat(display);
            let result;
            switch (operator) {
              case '+':
                result = prevValue + currentValue;
                break;
              case '-':
                result = prevValue - currentValue;
                break;
              case '*':
                result = prevValue * currentValue;
                break;
              case '/':
                result = prevValue / currentValue;
                break;
              default:
                return;
            }
            setDisplay(result.toString());
            setPrevValue(null);
            setOperator(null);
          }
          break;
        case 'C':
          setDisplay('0');
          setPrevValue(null);
          setOperator(null);
          break;
        default:
          return;
      }
    }
  };

  return (
    <div className="calculator">
      <main className="container">
        <article>
          <input type="text" value={display} disabled />
          <div className="buttons">
            {[7, 8, 9, '*', 4, 5, 6, '-', 1, 2, '3', '+', 'C', '0', '=', '/'].map((value) => (
              <button
                key={value}
                onClick={() => handleButtonClick(value)}
                className={isNaN(value) ? 'contrast' : ''}
              >
                {value}
              </button>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}

export default Calculator;
