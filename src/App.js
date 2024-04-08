import "./App.css";
import "./index.css";

import Main from "./components/Main";

import Sidebar from "./components/Sidebar";
import BackToTopButton from "./components/BackToTopButton ";
import axios from "axios";
import { useEffect } from "react";
const visitEndpoint = process.env.REACT_APP_VISIT_API_ENDPOINT;
function App() {
  useEffect(() => {
    if (sessionStorage.getItem("visit")) {
      console.log("visited");
    } else {
      const data = {
        webSiteName: "portfolio",
        count: 1,
      };
      axios
        .post(`${visitEndpoint}/visit`, { data })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sessionStorage.setItem("visit", true);
  }, []);
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col flex-1 pl-0  md:pl-[19rem] ">
        <Main />

        <BackToTopButton />
      </div>
    </div>
  );
}

export default App;
