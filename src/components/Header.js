import React from "react";

const Header = () => {
  return (
    <div style={{ borderBottom: "1px solid gray" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "50px",
          alignItems: "center",
          marginInline: "20px",
        }}
      >
        <div>
          <span style={{}}>KNOWLEDGE</span>
        </div>
        <div
          style={{
            display: "flex",
            width: "200px",
            justifyContent: "space-between",
            height: "20px",
          }}
        >
          <button
            style={{ backgroundColor: "blue", border: "none", color: "white" }}
          >
            CREATE COURSE
          </button>
          <img
            alt="user"
            src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png"
            style={{ height: "20px" }}
          />
          <span>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
