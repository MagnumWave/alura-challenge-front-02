export interface Projeto {
  id: number | null;
  nome: string;
  descricao: string;
  linguagem: string;
  corDeFundo: string;
  estiloDoHighlight: string;
  numeroDeLikes: number;
  numeroDeComentarios: number;
  usuario: string;
}

export type Projetos = Projeto[];
