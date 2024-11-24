import React from "react";

const Error = ({ info, retry }) => {
  return (
    <div>
      <h2>{info}</h2>
      <button onClick={{ retry }}>Tekrar Dene</button>
    </div>
  );
};

export default Error;
