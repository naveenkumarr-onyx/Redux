import React from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  // useSelector is only use for reading Example how many tasks available in our store
  const { tasksList, error } = useSelector((state) => state.tasks);

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
      {tasksList.length === 0 ? (
        <>
          <h3
            style={{
              color: "red",
            }}
          >
            oops!No tasks will available.
          </h3>
        </>
      ) : (
        <>
          {" "}
          <h3
            style={{
              fontWeight: "200",
            }}
          >
            {` Currently ${tasksList.length} task(s) pending`}
          </h3>
        </>
      )}
      {error !== "" ? (
        <>
          <h5
            style={{
              color: "red",
              fontWeight: "200",
            }}
          >
            {error}
          </h5>
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
