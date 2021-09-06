import React from 'react';
import { useState } from 'react';
import dollar from '../images/icon-dollar.svg';
import person from '../images/icon-person.svg';

const Card = ({ buttonData }) => {
  const [percent, setPercent] = useState(0);
  const [number, setNumber] = useState(1);
  const [price, setPrice] = useState(0);
  // const [tip_amount, setTip_amount] = useState(0);

  const changePercent = (percent) => {
    setPercent(percent);
  };

  const changePercentInput = (e) => {
    const percent = e.target.value;
    setPercent(percent);
  };

  const handleChangePrice = (e) => {
    const value = e.target.value;
    setPrice(value);
  };

  const handleChangeNumber = (e) => {
    const value = e.target.value;
    setNumber(value);
  };

  const handleReset = () => {
    setPercent(0);
    setNumber(1);
    setPrice(0);
  };

  const tip_amount = (price * percent) / 100 / number;
  const total = price / number + tip_amount;

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
                value={price}
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
                  className="rightAlignText"
                />
              </div>
            </div>
          </div>
        </div>

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
            onClick={total === 0 ? '' : handleReset}
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
