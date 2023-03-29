import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="inner-sidebar">
        <p
          style={{
            textAlign: "start",
            color: "white",
            padding: 0,
            
          }}
        >
          Remote SalesFuel
        </p>
        <div className="sidebar-two">
          <p className="center" style={{ padding: "5px", margin: 0 }}>
            DASHBOARD
          </p>
          <p className="center" style={{ padding: "5px", margin: 0 }}>
            KNOWLEDGE
          </p>
          <p className="center" style={{ padding: "5px", margin: 0 }}>
            REMOTE
          </p>
          <p className="center" style={{ padding: "5px", margin: 0 }}>
            MEMBERS
          </p>
          <p className="center" style={{ padding: "5px", margin: 0 }}>
            TEAMS
          </p>
          <p className="center" style={{ padding: "5px", margin: 0 }}>
            VAULT
          </p>
          <p className="center" style={{ padding: "5px", margin: 0 }}>
            CHAT
          </p>
        </div>
      </div>
      <div style={{paddingInline:"20px"}}>
        <p className="center" style={{ padding: "5px", margin: 0 }}>
          SETTINGS
        </p>
        <p className="center" style={{ padding: "5px", margin: 0 }}>
          COMPANY
        </p>
        <p className="center" style={{ padding: "5px", margin: 0 }}>
          MYPROFILE
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
