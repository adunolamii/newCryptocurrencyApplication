import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Cryptocurrency.css";

function Cryptocurrency() {
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapiv1.coinstats.app/coins", {
        headers: {
          " X-API-KEY": "+6e+Ehrx8vrvpA+nmd+O9T1n5EpHMKyIA0TsrP2/W8o=",
        },
      })
      .then((res) => setCurrency(res.data.result))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Cryptocurrency App</h1>
      <div className="container">
        <input
          type="text"
          className="search"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <table className="tr">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>MarketCap</th>
              {/* <th>Price</th> */}
              {/* <th>AvailableSupply</th>
              <th>Volume</th> */}
            </tr>
          </thead>
          <tbody>
            {currency
              .filter((val) => {
                return val.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((val) => {
                return (
                  <tr>
                    <td className="rank">{val.rank}</td>
                    <td className="logo">
                      <a href={val.websiteUrl}>
                        <img src={val.icon} alt="" />
                      </a>
                      <p>{val.name}</p>
                    </td>
                    <td className="symbol">{val.symbol}</td>
                    <td>${val.marketCap}</td>
                    {/* <td>${val.price.toFixed(2)}</td> */}
                    {/* <td>{val.availableSupply}</td>
                    <td>{val.volume.toFixed(0)}</td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cryptocurrency;
