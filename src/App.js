import React, { useState } from "react";
import { Provider } from "react-redux";
import ReactTooltip from "react-tooltip";
import MapChart from "./components/MapChart";
import store from "./store/store"; // Redux store'u import edin

const App = () => {
  const [content, setContent] = useState("");

  return (
    <Provider store={store}>
      <div>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </Provider>
  );
};

export default App;
