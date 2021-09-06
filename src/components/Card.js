import React from 'react';
import { useState } from 'react';
import dollar from '../images/icon-dollar.svg';
import person from '../images/icon-person.svg';

const Card = ({ buttonData }) => {
  const [percent, setPercent] = useState(0);
  const [number, setNumber] = useState(0);
  const [price, setPrice] = useState(0);
  const [tip_amount, setTip_amount] = useState(0);
  const [total, setTotal] = useState(0);

  const changePercent = (percent) => {
    setPercent(percent);

    if (price !== 0 && number !== 0) {
      handleCalculate();
    }
  };

  const changePercentInput = (e) => {
    const percent = e.target.value;
    setPercent(percent);

    if (price !== 0 && number !== 0) {
      handleCalculate();
    }
  };

  const handleChangePrice = (e) => {
    const value = e.target.value;
    setPrice(value);

    if (price !== 0 && number !== 0) {
      handleCalculate();
    }
  };

  const handleChangeNumber = (e) => {
    const value = e.target.value;
    setNumber(value);

    if (price !== 0 && number !== 0) {
      handleCalculate();
    }
  };

  const handleReset = () => {
    setPercent(0);
    setNumber(0);
    setPrice(0);
  };

  const handleCalculate = () => {
    if (percent === 0) {
      setTip_amount(price / 100 / number);
    } else {
      setTip_amount((price * percent) / 100 / number);
    }
    setTotal(price / number + tip_amount);
  };

  return (
    <div className="card">
      <section>
        <div className="cal">
          <div>
            <span>Bill</span>
            <div className="input-box">
              <span className="prefix">
                <img src={dollar} alt="" />
              </span>
              <input
                onChange={handleChangePrice}
                // value={price}
                type="number"
                placeholder="0"
                className="rightAlignText"
              />
            </div>
          </div>

          <div>
            <span>Select Tip %</span>
            <div className="tip-percent">
              {buttonData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => changePercent(item.percent)}
                >
                  {item.percent}%
                </button>
              ))}
              <input
                className="rightAlignText"
                type="text"
                placeholder="Custom"
                onChange={changePercentInput}
              />
            </div>
          </div>

          <div>
            <span>Number of People</span>
            <div>
              <div className="input-box">
                <span className="prefix">
                  <img src={person} alt="" />
                </span>
                <input
                  onChange={handleChangeNumber}
                  type="number"
                  placeholder="0"
                  // value={number}
                  className="rightAlignText"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <button onClick={handleCalculate}>submit</button> */}

        <div className="result">
          <div>
            <span>Tip Amount</span>
            <p>/person</p>
          </div>
          <div className="summary">
            <h1>${tip_amount}</h1>
          </div>

          <div>
            <span>Total</span>
            <p>/person</p>
          </div>
          <div className="summary">
            <h1>${total}</h1>
          </div>
          <button
            onClick={handleReset}
            className={total === 0 ? 'reset-defalt' : 'reset'}
          >
            RESET
          </button>
        </div>
      </section>
    </div>
  );
};

export default Card;
