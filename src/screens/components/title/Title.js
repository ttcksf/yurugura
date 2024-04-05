import React from "react";

const mainTitle = ({ subTitle, mainTitle }) => {
  return (
    <>
      <div className="heading">
        <h3>{subTitle}</h3>
        <h1>{mainTitle}</h1>
      </div>
    </>
  );
};

export default mainTitle;
