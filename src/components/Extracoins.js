import React from "react";
import "../asset/style/extracoins.css";
import sskale from "./asset/image/sskale.svg";
import fforth from "./asset/image/fforth.svg";
import ggraph from "./asset/image/ggraph.svg";
import sstellar from "./asset/image/sstellar.svg";

export const Extracoins = () => {
  return (
    <div className="extracoins_main">
      <div className="extracoins_cover">
        <div className="extracoins_left">
          <h3 className="extracoins-h1">Earn up to $28 worth of crypto </h3>
          <p className="extracoins-p">
            Discover how specific cryptocurrencies work — and <br /> get a bit
            of each crypto to try out for yourself.
          </p>
          <button className="extracoins-bttn">start earning</button>
        </div>

        <div className="extracoins_right">
          <div className="right-item-container">
            <div className="right-item-container-left">
              <img src={sskale} alt="skale logo" className="extracoins_logo" />
              <h2 className="fullName">SKALE</h2>
              <h3 className="short-name">SKL</h3>
            </div>
            <div className="right-item-container-right">
              <h4 className="earn">Earn $3 SKL</h4>
            </div>
          </div>

          <div className="right-item-container">
            <div className="right-item-container-left">
              <img src={fforth} alt="forth logo" className="extracoins_logo" />
              <h3 className="fullName">
                AmpleForth <br /> Governance Token
              </h3>
            </div>
            <div className="right-item-container-right">
              <h4 className="earn">Earn $3 FORTH</h4>
            </div>
          </div>

          <div className="right-item-container">
            <div className="right-item-container-left">
              <img src={ggraph} alt="graph logo" className="extracoins_logo" />
              <h3 className="fullName">The Graph</h3>
              <h3 className="short-name">GRT</h3>
            </div>
            <div className="right-item-container-right">
              <h4 className="earn">Earn $3 GRT</h4>
            </div>
          </div>
          <div className="right-item-container">
            <div className="right-item-container-left">
              <img
                src={sstellar} alt="sstellar logo" className="extracoins_logo" />
              <h3 className="fullName">SKALE</h3>
              <h3 className="short-name">SKL</h3>
            </div>

            <div className="right-item-container-right">
              <h4 className="earn">Earn $3 XLM</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extracoins;
