import React from 'react';
import Heading from "./components/layout/Heading";
import Paragraph from "./components/layout/Paragraph";
import Layout from "./components/layout/Layout";

import './App.css'
import "./css/style.css";

function App() {
  return (
    <Layout>
      <Heading title="Title from prop" subtitle="Subtitle from prop" />
      <Paragraph>This will be the children prop inside the component.</Paragraph>
    </Layout>
  );
}

export default App;


/*
CREDIT:

Blackwhitw to color code:
https://ethercycle.com/blog/305/

Help with navbar, brand and more:
https://react-bootstrap.github.io/

Footer:
https://github.com/jmlivingston/react-bootstrap-sticky-footer/

*/