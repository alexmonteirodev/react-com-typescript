import React from "react";
import { useUserContext } from "./UserContext";

const Header = () => {
  const { data } = useUserContext();
  console.log(data);

  return (
    <div>
      <h1>Nome: {data?.nome}</h1>
    </div>
  );
};

export default Header;
