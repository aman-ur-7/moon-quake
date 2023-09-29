import React, { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";
import MainPage from "./MainPage";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return <>{loading == false ? <MainPage /> : <LoadingPage />}</>;
};

export default App;
