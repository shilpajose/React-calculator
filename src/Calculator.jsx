import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
   <div className='container w-25 bg-dark m-5 p-5' style={{position:'absolute',left:'35%'}}>
      <div className="calculator">
        <div className="display">
          <input type="text" className='form-control' value={input} readOnly />
          <div className="result bg-info text-danger m-5 p-5">{result}</div>
        </div>
        <div className="buttons">
          <div className="row">
            <button className='w-25 btn btn-outline-danger' onClick={() => handleClick('7')}>7</button>
            <button className='w-25 btn btn-outline-danger' onClick={() => handleClick('8')}>8</button>
            <button className='w-25 btn btn-outline-danger' onClick={() => handleClick('9')}>9</button>
            <button className='w-25 btn btn-outline-danger' onClick={() => handleClick('/')}>/</button>
          </div>
          <div className="row">
            <button className='w-25 btn btn-outline-danger' onClick={() => handleClick('4')}>4</button>
            <button className='w-25 btn btn-outline-danger' onClick={() => handleClick('5')}>5</button>
            <button className='w-25 btn btn-outline-danger' onClick={() => handleClick('6')}>6</button>
            <button className='w-25 btn btn-outline-danger' onClick={() => handleClick('*')}>*</button>
          </div>
          <div className="row">
            <button className='w-25 btn btn-outline-danger' onClick={() => handleClick('1')}>1</button>
            <button className='w-25 btn btn-outline-danger' onClick={() => handleClick('2')}>2</button>
            <button className='w-25 btn btn-outline-danger' onClick={() => handleClick('3')}>3</button>
            <button className='w-25 btn btn-outline-danger' onClick={() => handleClick('-')}>-</button>
          </div>
          <div className="row">
            <button className='w-25 btn btn-outline-danger' onClick={() => handleClick('0')}>0</button>
            <button className='w-25 btn btn-outline-danger' onClick={() => handleClick('.')}>.</button>
            <button className='w-25 btn btn-outline-danger' onClick={handleCalculate}>=</button>
            <button className='w-25 btn btn-outline-danger' onClick={() => handleClick('+')}>+</button>
          </div>
          <div className="row justify-content-center mt-4">
            <button className="w-50 clear btn btn-secondary text-light" onClick={handleClear}>
              C
            </button>
          </div>
        </div>
      </div>
   </div>
  );
};

export default Calculator;