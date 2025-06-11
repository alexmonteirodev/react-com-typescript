import React from "react";

type IputType = React.ComponentProps<"input"> & {
  id: string;
  txt: string;
};

const Input = ({ id, txt, ...props }: IputType) => {
  return (
    <div style={{ marginBottom: "1rem", maxWidth: "500px" }}>
      <label htmlFor={id}>{txt}</label>
      <input type="date" id={id} name={id} {...props} />
    </div>
  );
};

export default Input;
