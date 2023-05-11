import React, { useState } from "react";

export const Home = () => {
  const [codeforces_id, setcodeforces_id] = useState("");
  const [leetcode_id, setleetcode_id] = useState("");
  const [codechef_id, setcodechef_id] = useState("");
  const [atcoder_id, setatcoder_id] = useState("");

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <div className="details_container">
        <div>
          <form>
            <div className="input_container">
              <label>
                <h4>Codeforces</h4>
                <input
                  type="text"
                  className="id_input input1"
                  onChange={(e) => {
                    setcodeforces_id(e.target.value);
                  }}
                ></input>
              </label>
              <button type="submit" className="id_button Search">
                Search
              </button>
              <button
                type="button"
                className="id_button Goto"
                onClick={() => handleRedirect("https://codeforces.com/")}
              >
                Visit Website
              </button>
            </div>
            <div className="input_container">
              <label>
                <h4>Leetcode</h4>
                <input
                  type="text"
                  className="id_input input2"
                  onChange={(e) => {
                    setleetcode_id(e.target.value);
                  }}
                ></input>
              </label>
              <button type="submit" className="id_button Search">
                Search
              </button>
              <button
                type="button"
                className="id_button Goto"
                onClick={() => handleRedirect("https://leetcode.com/")}
              >
                Visit Website
              </button>
            </div>
            <div className="input_container">
              <label>
                <h4>Codechef</h4>
                <input
                  type="text"
                  className="id_input input3"
                  onChange={(e) => {
                    setcodechef_id(e.target.value);
                  }}
                ></input>
              </label>
              <button type="submit" className="id_button Search">
                Search
              </button>
              <button
                type="button"
                className="id_button Goto"
                onClick={() => handleRedirect("https://www.codechef.com/")}
              >
                Visit Website
              </button>
            </div>
            <div className="input_container">
              <label>
                <h4>Atcoder</h4>
                <input
                  type="text"
                  className="id_input input3"
                  onChange={(e) => {
                    setatcoder_id(e.target.value);
                  }}
                ></input>
              </label>
              <button type="submit" className="id_button Search">
                Search
              </button>
              <button
                type="button"
                className="id_button Goto"
                onClick={() => handleRedirect("https://atcoder.jp/")}
              >
                Visit Website
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
