import { Component } from '@angular/core';
import { LivrosModel } from '../../model/livros.model';
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';
//Importação do ReactiveFormsModule e demais componentes necessários para o Formulário
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [FormsModule, NgFor, ReactiveFormsModule],
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.css'
})
export class LivrosComponent {
  public livro: LivrosModel = new LivrosModel();
  public listaLivros: LivrosModel[] = [];

  //Método para gravar os dados no formulário
  public gravar (){
    let novo = new LivrosModel();
    novo.id = this.livro.id;
    novo.titulo = this.livro.titulo;
    novo.autor = this.livro.autor;
    novo.paginas = this.livro.paginas;
    this.listaLivros.push(novo);
  }

    //Instanciando um novo FormGroup
    formularioLivro = new FormGroup({
    campoId: new FormControl(''),
    campoTitulo: new FormControl(''),
    campoAutor: new FormControl(''),
    campoPaginas: new FormControl('')
  })

}
