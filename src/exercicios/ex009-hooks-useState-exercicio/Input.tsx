import React from "react";

type IputType = React.ComponentProps<"input"> & {
  id: string;
  labelTxt: string;
};

const Input = ({ id, labelTxt, ...props }: IputType) => {
  return (
    <div style={{ marginBottom: "1rem", maxWidth: "500px" }}>
      <label htmlFor={id}>{labelTxt}</label>
      <input type="date" id={id} name={id} {...props} />
    </div>
  );
};

export default Input;
