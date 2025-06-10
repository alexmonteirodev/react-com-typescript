import React from "react";

type InputType = React.ComponentProps<"input"> & {
  label?: string;
  id?: string;
};
const Input = ({ id, label, ...props }: InputType) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={id}>{label} </label>
      <input name={id} id={id} type="text" {...props} />
    </div>
  );
};

export default Input;
//repare que o type text foi definido mas se definir no componente Aula um Input com outro Type, ex: date, vai sobrescrever então o text acaba virando um valor padrão para caso não seja passado o type do input.
