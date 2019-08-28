import React from "react";
import OrganigramContainer from "./components/OrganigramContainer";
import ScrollContainer from "react-indiana-drag-scroll";

function App() {
  return (
    <ScrollContainer className="scroll-container" horizontal>
      <OrganigramContainer />
    </ScrollContainer>
  );
}

export default App;
