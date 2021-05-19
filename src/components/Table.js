import React from "react";
import chart from "../asset/image/chart.jpg";
import bitcoin from "../asset/image/bit.jpg";
import ethereum from "../asset/image/eth.jpg";
import bitcoinCash from "../asset/image/bitcash.jpg";
import litecoin from "../asset/image/lit.jpg";
import "../asset/style/table.css";

const Lists = [
    {
      icon: bitcoin,
      name: "Bitcoin",
      code: "BTC",
      price: "GHS 295,202.53",
      change: "-0.44%",
      chart: chart,
    },
    {
      icon: ethereum,
      name: "Ethereum",
      code: "ETH",
      price: "GHS 24,010.42",
      change: "-1.39%",
      chart: chart,
    },
    {
      icon: bitcoinCash,
      name: "Litecoin",
      code: "LTC",
      price: "GHS 7,756.23",
      change: "+0.11%",
      chart: chart,
    },
    {
      icon: litecoin,
      name: "Bitcoin Cash",
      code: "BCH",
      price: "GHS 1.935.08",
      change: "+4.62%",
      chart: chart,
    },
  ];
  

  export const Table = () => {
    return (
      <div className="wholetable">
        <div className="cover">
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th className="columns">#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Change</th>
                <th>Chart</th>
                <th>Trade</th>
              </tr>
            </thead>
            <tbody>
              {Lists.map((Lists, index) => {
                return (
                  <tr>
                    <td className="columns">{index + 1}</td>
                    <td className="tableName">
                      <img src={Lists.icon} alt="logo" />
                      <h4 class="name">{Lists.name}</h4>
                      <h4 className="code">{Lists.code}</h4>
                    </td>
                    <td className="price">{Lists.price}</td>
                    <td className="change">{Lists.change}</td>
                    <td>
                      <img src={Lists.chart} alt="chart logo" />
                    </td>
                    <td>
                      <button class="buy">Buy</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default Table;
