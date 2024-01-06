import React from "react";

const Navbar = () => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "skyblue",
        }}
      >
        Project Management
      </h1>
      <h3
        style={{
          fontWeight: "200",
        }}
      >
        Currently 0 task(s) pending
      </h3>
    </div>
  );
};

export default Navbar;
