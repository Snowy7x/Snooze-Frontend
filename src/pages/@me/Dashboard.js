import React from "react";
import * as COM from "./components";

const Dashboard = () => {
  return (
    <>
      <main className="db-main">
        <COM.ChannelsPanel />
        <COM.MainPanel />
      </main>
      <footer className="db-footer">
        <COM.Footer />
      </footer>
    </>
  );
};

export default Dashboard;
