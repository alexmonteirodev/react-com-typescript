import React from "react";

// - useEffect
// Não precisamos anotar nenhum tipo especial no useEffect, ele é um hook que recebe uma função (função ativada no efeito) que retorna uma função (função ativada quando o componente é "desmontado"). Caso ele nao receba uma f e retorne outra, vai dar erro de TS.
// a segunda função (de retorno / return ) é chamada função de limpeza e ocorre quando o componente é desmontado

const Aula010 = () => {
  React.useEffect(() => {
    console.log("montou");
    return () => {
      console.log("desmontou");
    };
  }, []);

  //mesma coisa que:
  function useEffectCallback() {
    console.log("montou");
    return () => {
      console.log("desmontou");
    };
  }
  React.useEffect(useEffectCallback, []);

  return <div></div>;
};

export default Aula010;
