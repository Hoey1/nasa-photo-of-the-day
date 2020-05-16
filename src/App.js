import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants";
import styled from "styled-components";

import StyledImage from "./components/PotdBck";
import StyledTitle from "./components/Title";
import StyledOverlay from "./components/Overlay";

function App() {
  const [potd, setPotd] = useState(1);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        setPotd(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      {/* <div class="fade"></div> */}

      {/* <StyledOverlay> */}
      <div class="crawl">
        <StyledImage src={potd.url} alt={potd.title} />
        <StyledTitle>{potd.title}</StyledTitle>
        <p>{potd.date}</p>
        <p>{potd.explanation}</p>
        {/* </StyledOverlay> */}
      </div>
    </div>
  );
}

export default App;
