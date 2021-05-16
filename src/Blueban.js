import React from "react";
import "./blueban.css";

export const Blueban = () => {
  return (
    <div className="blue_ban_main">
      <div className="blue_ban_cover">
        <div className="blue_ban_texts">
          <h2 className="blue_ban_texts_title">$335B</h2>
          <p className="blue_ban_texts_para">Quarterly volume traded</p>
        </div>
        <div className="blue_ban_texts">
          <h2 className="blue_ban_texts_title">100+</h2>
          <p className="blue_ban_texts_para">Countries supported</p>
        </div>
        <div className="blue_ban_texts">
          <h2 className="blue_ban_texts_title">56+M</h2>
          <p className="blue_ban_texts_para">Verified users</p>
        </div>
      </div>
    </div>
  );
};

export default Blueban;
