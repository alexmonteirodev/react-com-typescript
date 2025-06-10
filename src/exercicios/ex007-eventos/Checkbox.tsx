import React from "react";

const Checkbox = ({ label }: { label: string }) => {
  const [value, setValue] = React.useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.checked);
  };

  return (
    <label
      style={{
        padding: "1rem",
        border: value ? "2px solid #8D2" : "2px solid #F70",
      }}
    >
      <input type="checkbox" checked={value} onChange={handleChange} />
      {label}
    </label>
  );
};

export default Checkbox;

//uma forma de definir isso sem ter que passar o type seria escrever como uma função anônima direto no evento onChange (na prop), porque como está dentro da tag input o React iria inferir que é do tipo React.ChangeEventHandler<HTMLInputElement> e quando a funcao for maior, passamos como foi passado agora
