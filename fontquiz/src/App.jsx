import React from "react";
import Header from "./components/Header";
import Error from "./components/Error";
import Loader from "./components/Loader";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main>
        <Loader />
        <Error />
      </Main>
    </div>
  );
};

export default App;
