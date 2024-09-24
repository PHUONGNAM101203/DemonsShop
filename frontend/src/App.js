import React, { Fragment, useReducer } from "react";
import Routes from "./components";
import { LayoutContext, layoutState, layoutReducer } from "./components/shop";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);
  return (
    <Fragment>
      <LayoutContext.Provider value={{ data, dispatch }}>
        <Routes />
      </LayoutContext.Provider>
    </Fragment>
  );
}

export default App;
