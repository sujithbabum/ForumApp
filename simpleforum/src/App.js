import Home from "./Home";
import Loading from "./Loading";
import Menubar from "./Menubar";
import { useState, useEffect } from "react";
import React from 'react'

function App() {
  const [data, setData] = useState(null);

  const getAllPosts = () => {
    fetch("/postRoutes")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  };

  useEffect(getAllPosts, []);

  return (
    <>
      <Menubar />
      {data === null ? <Loading /> : <Home data={data} />}
    </>
  );
}

export default App;
