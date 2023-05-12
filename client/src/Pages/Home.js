import React, { useState } from "react";
import Axios from "axios";
export const Home = () => {
  const [codeforces_id, setcodeforces_id] = useState("");
  const [leetcode_id, setleetcode_id] = useState("");
  const [codechef_id, setcodechef_id] = useState("");
  const [atcoder_id, setatcoder_id] = useState("");

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  // const get_codeforces_detail=()=>{
  //   console.log("handle clicked");
  //   Axios.post("http://localhost:3001/handle/codeforces",{

  //       codeforces_id:codeforces_id

  //    }).then((response)=>{
  //       console.log(response);
  //       alert(response.data.maxRating);
  //    })
  // }
  const get_codeforces_detail = () => {
    console.log("handle clicked");
    Axios.post("http://localhost:3001/handle/codeforces", {
      codeforces_id: codeforces_id,
    })
      .then((response) => {
        console.log(response);
        if (response.data.message === "No user exist!")
          alert(response.data.message);
        else {
          alert(response.data.maxRating);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error occurred while fetching data");
      });
  };
  return (
    <div>
      <div className="details_container">
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
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
              <button
                type="submit"
                className="id_button Search"
                onClick={get_codeforces_detail}
              >
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
