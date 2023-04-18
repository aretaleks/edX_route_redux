import React from "react";

const Links = () => {
  const divStyle = {
    padding: "10px"
  };
  return (
    <div>
      <h2 style={divStyle}>Useful links</h2>
      <p>Great resource for learning new skills!</p>
      <a href="https://www.edx.org/">It's edX</a>
      <p>Explore and contribute</p>
      <a href="https://github.com/aretaleks">my GitHub</a>
    </div>
  );
};

export default Links;
