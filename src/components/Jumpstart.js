import React from "react";
import "../asset/style/jumpstart.css";
import JumpstartImage from "./JumpstartImage";

export const Jumpstart = () => {
  return (
    <div className="jumpstart_main">
      <div className="jumpstart_wrapper">
        <div className="jumpstart_writeup">
          <a href="/" class="jumpstart_btc_arrow">
            <i class="fab fa-btc"></i>
            <p>Jump Start Your Portfolio</p>
            <i class="fas fa-arrow-right"></i>
          </a>
          <h1 class="jumpstart_title">
            Jump start <br /> your crypto <br /> portfolio
          </h1>
          <p class="jumpstart_para">
            Coinbase is the easiest place to buy and sell cryptocurrency. Sign
            up and get started today.
          </p>
          <form>
            <div className="form_group">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form_group">
              <input type="submit" placeholder="Get started" />
            </div>
          </form>
          <a href="/" className="terms_applied">
            * Terms apply
          </a>
        </div>

        <div className="jumpstart_image">
          <JumpstartImage />
        </div>
      </div>
    </div>
  );
};

export default Jumpstart;
