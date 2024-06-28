export class LivrosModel {
  public id: number;
  public titulo: string;
  public autor: string;
  public paginas: number;

  constructor(){
    this.id = 0;
    this.titulo = "";
    this.autor = "";
    this.paginas = 0;
  }
}
//Atributos e construtor para usar nos formulários dos componentes
