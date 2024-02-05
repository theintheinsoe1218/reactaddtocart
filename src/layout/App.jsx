import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

import Body from "./Body";
import Header from "./Header";
import { Backdrop } from "../components/Backdrop";

function App() {
  return (
    <>
      <Header />
      <Body />
      <Backdrop />
    </>
  );
}

export default App;
