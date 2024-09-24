import React, { Fragment } from "react";
import Layout from "../layout";
import ContactUs from "./contactUs";

const contactUs = () => {
  return (
    <Fragment>
      <Layout children={<ContactUs />} />
    </Fragment>
  );
};

export default contactUs;
