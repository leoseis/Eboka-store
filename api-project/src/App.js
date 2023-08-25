
import React, { useState, useEffect } from "react";
import Axios from "axios";
import MyCard from "./MyCard";

const App = () => {
  const [userData, setUserData] = useState({});

  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log("RESPONSE:", data);
    const details = data.results[0];
    setUserData(details);
  };

  useEffect(() => {
    fetchDetails();
  }, [ ]);

  return (
    <div>
      <MyCard details={userData} />
    </div>
  );
};

export default App;