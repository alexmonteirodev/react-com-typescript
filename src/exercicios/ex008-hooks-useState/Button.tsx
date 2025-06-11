import React from "react";

type ButtonProps = {
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ setTotal }: ButtonProps) => {
  return <button onClick={() => setTotal((n) => n + 1)}>Incrementar</button>;
};

export default Button;
