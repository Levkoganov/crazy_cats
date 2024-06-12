import React from "react";

interface IProps {
  children: React.ReactNode;
}

function WrapperComponent({ children }: IProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "80%",
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default WrapperComponent;
