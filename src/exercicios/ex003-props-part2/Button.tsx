import React from "react";

//Como sempre, tem como simplificar as coisas, o ex002, é a forma mais detalhada e demorada de fazer, por isso temos que como children é uma prop comum de se ter, o React já tem um próprio tipo para isso: React.PropsWithChildren

//React.PropsWithChildren<P = unknown> = P & {children?: React.ReactNode | undefined;}

//repare que esse tipo passa um elemento genérico 'P' e coloca o children como ReactNode, podemos dizer definir esse P = unknown, para o type que queremos:

//isso:
// type ButtonProps = {
//   tamanho?: string;
//   children?: React.ReactNode;
//   onClick?: () => void;
// };

//mesma coisa que:
type ButtonProps2 = React.PropsWithChildren<{
  tamanho?: string;
  onClick?: () => void;
}>;

//para melhorar ainda mais, podemos desestruturar as props, para ao invés de passar props.tamanho, passar só tamanho

// const Button = ({ tamanho, onClick, children }: ButtonProps2)

//vamos supor que agora vc quer colocar uma className e um id, vai ter que ficar voltando toda hora no componente Button e adicionando isso ao Type, pra isso temos como simplificar mais uma vez usando um tipo utilitário do próprio react que se chama React.ComponentProps e podemos informar com uma string qual é o tipo desse elemento:

type ButtonProps3 = React.ComponentProps<"button">;

//usar o React.ComponentProps é informar pro TS que esse botão pode receber qualquer propriedade que um elemento Button possua por padrão. Fazendo isso nota-se que ao começar a escrever uma propriedade já aparece o autocomplete porque agora o TS sabe que esse elemento é um botão.

//mas repare que a prop 'tamanho' gera um erro de TS (mude o type para ButtonProps3) porque dentro das props possveis para um elemento button, ela não existe, porque eu criei. Então posso extender o tipo, usando o &, para adicionar minhas próprias props:

type ButtonProps4 = React.ComponentProps<"button"> & {
  tamanho?: string;
};

//maas, mesmo assim ao passar uma prop nova lá no componente Aula, mesmo com o autocomplete e tudo ainda teria que vir aqui no componente button e desestruturar. Porém, quando desestruturamos um obj, podemos pegar as propriedades e métodos que precisamos, ex:

//{ tamanho, onClick, children }

//mas tbm podemos usar um ...rest que vai ser apenas um obj que contem as propriedades que forém além das que já estão desestruturadas, assim, basta escrever uma nova prop no button lá no componente Aula que ela já cai aqui no ...rest (geralmente usa-se o nome '...props')

//repare que a class btn foi adicionada ao button no inspecionar elemento sem precisar desestruturar, pois ela está em ...props

const Button = ({ tamanho, onClick, children, ...props }: ButtonProps4) => {
  return (
    <button onClick={onClick} style={{ fontSize: tamanho }} {...props}>
      {children}
    </button>
  );
};

export default Button;
