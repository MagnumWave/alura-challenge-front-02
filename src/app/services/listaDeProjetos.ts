import { Projetos } from './../components/comunidade/projeto';
export const listaDeProjetos: Projetos = [
  {
    id: 1,
    nome: "Olá Mundo",
    descricao: "Função mais manjada que console.log() e System.out.print()...",
    linguagem: "language-javascript",
    corDeFundo: "#0F0",
    codigo: `function helloWorld(name){
      const innerName = name;
      const outPut = "Diga Olá para o mundo inteiro te ouvir, ";
      window.alert(outPut + innerName + "!");
    }`,
    estiloDoHighlight: "dracula",
    numeroDeComentarios: 2,
    numeroDeLikes: 3,
    usuario: "Harry-guy"
  },
  {
    id: 2,
    nome: "Full-StackOverflow",
    descricao: "Na internet nada se perde, nada se cria, tudo se copia.",
    linguagem: "language-javascript",
    corDeFundo: "#00F",
    codigo: `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

    const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

    const unfold = (f, seed) => {
      const go = (f, seed, acc) => {
        const res = f(seed)
        return res ? go(f, res[1], acc.concat([res[0]])) : acc
      }
      return go(f, seed, [])
    }`,
    estiloDoHighlight: "agate",
    numeroDeComentarios: 2,
    numeroDeLikes: 3,
    usuario: "Harry-guy"
  },
  {
    id: 3,
    nome: "DIY - Tabela",
    descricao: "Cria a tabela... Mas não dropa a tabela!... ;)",
    linguagem: "language-html",
    corDeFundo: "#F00",
    codigo: `<h2>A basic HTML table</h2>

    <table style="width:100%">
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </table>`,
    estiloDoHighlight: "dracula",
    numeroDeComentarios: 2,
    numeroDeLikes: 3,
    usuario: "Harry-guy"
  },
];
