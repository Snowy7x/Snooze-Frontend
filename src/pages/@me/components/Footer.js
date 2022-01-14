import React from "react";

export const Footer = () => {
  const [display, setDisplay] = React.useState("none");
  return (
    <div className="db-b-bar">
      <div
        className="friends-toggle"
        onClick={() => {
          setDisplay(display === "none" ? "block" : "none");
        }}
      />
      <div className="servers">
        <div className="server"></div>
        <div className="server"></div>
        <div className="server"></div>
        <div className="server"></div>
        <div className="server"></div>
        <div className="server"></div>
        <div className="server"></div>
        <div className="server"></div>
      </div>
      <div className="servers">
        <div className="server"></div>
        <div className="server"></div>
      </div>
      <div className="friendsPanel" style={{ display: display }}>
        <div className="down-triangle"></div>
      </div>
    </div>
  );
};
