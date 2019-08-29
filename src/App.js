import React, { Fragment } from "react";
import OrganigramContainer from "./components/OrganigramContainer";
import ScrollContainer from "react-indiana-drag-scroll";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <ScrollContainer className="scroll-container" horizontal>
        <OrganigramContainer />
      </ScrollContainer>
      <Footer />
    </Fragment>
  );
}

export default App;
