"use client";
import React from "react";

const error = () => {
  return (
    <div style={{ width: "100%", height: "100vh", textAlign: "center" }}>
      <div
        style={{
          display: "table-cell",
          verticalAlign: "middle",
          fontSize: "3rem",
        }}
      >
        <h1
          style={{
            paddingRight: "12px",
            animation: "type .5s alternate infinite",
          }}
        >
          Error 404
        </h1>
      </div>
    </div>
  );
};

export default error;
