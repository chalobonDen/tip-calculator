import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <section>
        <div className="cal">
          <div>
            <span>Bill</span>
            <div class="input-box">
              <span class="prefix">$</span>
              <input type="number" placeholder="0" className="rightAlignText" />
            </div>
          </div>

          <div>
            <span>Select Tip %</span>
          </div>
        </div>

        <div className="result">right</div>
      </section>
    </div>
  );
};

export default Card;
