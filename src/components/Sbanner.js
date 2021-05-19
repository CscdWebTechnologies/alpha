import React from "react";
import "../asset/style/sbanner.css";

export const Sbanner = () => {
  return (
    <div className="main_s_banner">
      <div className="s_banner_takeaway">
        <div className="s_left">
          <h2 className="s_left_title">Earn up to $28 worth of crypto</h2>
          <p className="s_left_para">
            Discover how specific cryptocurrencies work — and get a bit of each
            crypto to try out for yourself
          </p>
          <button className="s_left_btn">Start earning</button>
        </div>
        <div className="s_right">
          <img
            src="https://assets.coinbase.com/assets/earn-upsell-desktop.dad0f473399e16fa8c176a9599c883ea.webp"
            alt="space pic"
          />
        </div>
      </div>
    </div>
  );
}

export default Sbanner;
