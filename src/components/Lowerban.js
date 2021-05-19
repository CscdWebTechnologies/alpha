import React from "react";
import "./asset/Lowerban.css";

export const lowerban = () => {
  return (
    <div className="main_lower_ban">
      <div className="lower_ban_cov">
        <div className="lower_left">
          <h2 className="lower_left_title">Earn up to $28 worth of crypto</h2>
          <p className="lower_left_para">
            Discover how specific cryptocurrencies work — and get a bit of each
            crypto to try out for yourself
          </p>
          <button className="space_left_btn">Start earning</button>
        </div>
        <div className="space_right">
          <img
            src="https://assets.coinbase.com/assets/earn-upsell-desktop.dad0f473399e16fa8c176a9599c883ea.webp"
            alt="lower pic"
          />
        </div>
      </div>
    </div>
  );
};

export default lowerban;
