import React, { useEffect, useState } from "react";

const Circle = ({ filter, backgroundColor }) => {
  let randomPosition = () => {
    return Math.floor(Math.random() * 800);
  };

  const [position, setPosition] = useState({
    top: randomPosition(),
    left: randomPosition(),
  });

  let movePosition = () => {
    setPosition({ top: randomPosition(), left: randomPosition() }, 1000);
  };

  useEffect(() => {
    setInterval(movePosition, 1000);
  }, []);

  console.log(position);

  let circleStyles = {
    // filter: filter,
    backgroundColor: backgroundColor,
    // top: position.top,
    // left: position.left,
    width: "100px",
    height: "100px",
    position: "absolute",
    transform: `translate(${position.left}px, ${position.top}px)`,
  };

  return (
    <div style={circleStyles} className="circle">
      Circle
    </div>
  );
};

export default Circle;
