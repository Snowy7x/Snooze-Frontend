import React from "react";
import * as DOM from "./index";

const MainPanel = () => {
  return (
    <div className="db-panel db-m">
      <div className="db-header">Head</div>
      <div className="db-content-container">
        <DOM.ChatPanel />
        <DOM.MembersPanel />
      </div>
    </div>
  );
};

export default MainPanel;
