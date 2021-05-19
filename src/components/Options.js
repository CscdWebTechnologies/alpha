import React from "react";
import "../asset/style/options.css";
import mobile from '../asset/image/mobile.svg';
import vault from '../asset/image/vault.svg';
import graph from "../asset/image/graph.svg";
import calender from "../asset/image/calendar.svg";




export const Options = () => {
  return (
    <div className="options_main">
      <div className="options_main_heading">
        <h1 className="options_h1">
          Create your cryptocurrency portfolio today
        </h1>
        <p className="options_p">
          Coinbase has a variety of features that make it the best place to
          start trading
        </p>
      </div>

      <div className="options_holder">
        <div className="options_left">
          <div className="options_item">
            <div className="options_icon_holder">
              <img src={graph} alt="lol" className="options_icon" />
            </div>
            <div className="options_writeup__container">
              <h3 className="options_h3">Manage your portfolio</h3>
              <p className="options_p">
                Buy and sell popular digital currencies, keep track of them in
                the one place.
              </p>
            </div>
          </div>
          <div className="options_item">
            <div className="options_icon_holder">
              <img src={calender} alt="lol" className="portfolio__icon" />
            </div>
            <div className="options_writeup_holder">
              <h3 className="options_h3">Recurring buys</h3>
              <p className="options_p">
                Invest in cryptocurrency slowly over time by scheduling buys
                daily, weekly, or monthly.
              </p>
            </div>
          </div>
          <div className="options_item">
            <div className="options_icon_holder">
              <img src={vault} alt="lol" className="options_icon" />
            </div>
            <div className="options_writeup_holder">
              <h3 className="options_h3">Vault protection</h3>
              <p className="options_p">
                For added security, store your funds in a vault with time
                delayed withdrawals.
              </p>
            </div>
          </div>
          <div className="options_item">
            <div className="options_icon_holder">
              <img src={mobile} alt="lol" className="options_icon" />
            </div>
            <div className="options_writeup_holder">
              <h3 className="options_h3">Mobile apps</h3>
              <p className="options_p">
                Stay on top of the markets with the Coinbase app for{" "}
                <a href="/" className="android_link">
                  Android
                </a>{" "}
                or{" "}
                <a href="/" className="ios_link">
                  iOS
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="options_right">
          <img
            src="https://assets.coinbase.com/assets/coinbase-app.3b0bfd4cb6b7a7614c1e18472187f6b9.webp"
            alt="options pic"
            className="options_image"
          />
        </div>
      </div>
    </div>
  );
}

export default Options;
