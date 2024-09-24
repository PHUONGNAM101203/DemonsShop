import React, { Fragment } from "react";
import Layout from "../layout";
import Custom from "./custom";

const custom = () => {
  return (
    <Fragment>
      <Layout children={<Custom />} />
    </Fragment>
  );
};

export default custom;
