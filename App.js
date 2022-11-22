import React from "react";
import { Main, MainM } from "./src/components";

export default function App() {
  console.log(self.innerWidth);
  return (
    <>
      { self.innerWidth > 400 ? <Main /> : <MainM /> }
    </>
  );
}
