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

  const changePercent = async (percent) => {
    await setPercent(percent);
    await handleCalculate();
  };

  const changePercentInput = async (e) => {
    const percent = await e.target.value;
    await setPercent(percent);
    await handleCalculate();
  };

  const handleChangePrice = async (e) => {
    const value = await e.target.value;
    await setPrice(value);
    await handleCalculate();
  };

  const handleChangeNumber = async (e) => {
    const value = await e.target.value;
    await setNumber(value);
    await handleCalculate();
  };

  const handleReset = () => {
    setPercent(0);
    setNumber(0);
    setPrice(0);
    setTip_amount(0);
    setTotal(0);
  };

  const handleCalculate = () => {
    if (percent === 0) {
      setTip_amount(0);
      setTotal(price / number);
    } else {
      setTip_amount((price * percent) / 100 / number);
      setTotal(price / number + (price * percent) / 100 / number);
    }
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
                value={percent}
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
                  value={number}
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
            <h1>${tip_amount.toFixed(2)}</h1>
          </div>

          <div>
            <span>Total</span>
            <p>/person</p>
          </div>
          <div className="summary">
            <h1>${total.toFixed(2)}</h1>
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
