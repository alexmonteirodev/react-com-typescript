import React from "react";

type IUiContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const UiContext = React.createContext<IUiContext | null>(null);

export const useUi = () => {
  const context = React.useContext(UiContext);
  if (context === null) throw new Error("Você esqueceu de usar o provider");

  return context;
};

export const UiContextProvider = ({ children }: React.PropsWithChildren) => {
  const [dark, setDark] = React.useState(false);

  return (
    <UiContext.Provider value={{ dark, setDark }}>
      {children}
    </UiContext.Provider>
  );
};

//obs: o value (value="") do UiContext.Provider tem que ser igual ao value do UiContext (UiContext = React.createContext("")). Nesse value será disponivel os elementos que vc for utilizar no contexto.

// Ao passar as props como dark e setDark, o value acusa um erro já que tem que ser o valor passado no uiContext, porque foi passado uma string e dark e setDark não são string, pra isso devemos anotar o tipo.

//ao passar a interface no UiContext, passa a dar um erro porque agora a string que lá havia não possui essa interface, então colocamos como null e que pode ser a interface ou null.

//agora o problema é que ao exportar o dark e setDark ele aparece no componente Header como IUiContext | null que foi o que definimos. Porém não tem como ele ser null porque ao dar console.log ele já é o objeto que definimos porque já adicionamos o state de dark e setDark e passamos como props, então não tem como ele ser null mas o TS acusa o erro porque ele não executa código. Para resolver isso, podemos roubar (não é a melhor forma) no TS, informando que o UiContext só tem como receber um objeto do tipo da nossa interface, passando:

// export const UiContext = React.createContext<IUiContext | null>({} as IUiContext);

// O problema de fazer isso é que se você esquece de usar o provider no App (Aula.tsx), ele vai retornar um objeto vazio ou null e não vai gerar erro porque você garantiu que o state não poderia ser null e como o provider nao foi passado não chega a prop.

// e quando vc for utilizar o contexto, o TS vai te dar o autocomplete e tudo e quando vc usar um método do state, vai quebrar o app e dizer que não é uma função e pode confundir tudo. Tudo porque o Ts entende que é aquela interface porque vc garantiu pra ele.

// logo, tem uma forma de prevenir isso e garantir que a prop tem aquela interface. Podemos criar uma função especifica para usar o contexto dentro do proprio componente do context e exportar ela (useUi). basicamente ao exportar o contexto como ele chega no Aula.tsx como IUiContext | null o correto seria fazer uma typeGuard para garantir que ele não seja null e seguir normal... podemos definir isso diretamente no componente do context e exportar essa função assim não precisamos ficar fazendo verificações quando formos usar e vai dar erro caso esqueça de passar o context Provider.
