import React from "react";

//ao retornar o [state, setState] e tentar usar no componente Aula, da um erro porque ele não entende a ordem do return, tanto que ao passar o mouse em cima de volume ele da que pode ser: string | React.Dispatch<React.SetStateAction<string>>,pra resolver isso temos que usar o 'as const' ou definir o que a functino retorna:

//as const:
// const useLocalStorage = (key: string, inicial: string) => {
//   const [state, setState] = React.useState("");
//   return [state, setState] as const; //as const para manter essa ordem
// };

//ou

//define retorno
const useLocalStorage = (
  key: string,
  inicial: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
