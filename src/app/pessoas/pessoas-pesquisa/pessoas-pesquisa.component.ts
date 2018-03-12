import { LancamentoService } from './../../lancamentos/lancamento.service';
import { PessoasService } from './../pessoas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit{

  //totalregistros = 0;
  //filtro = new PessoasFiltro();
  pessoas = [];

  constructor(private pessoaservice: PessoasService){}

  ngOnInit(){
   this.pesquisar();
  }

  pesquisar(){
    this.pessoaservice.pesquisar()
     .then(pessoa => this.pessoas = pessoa);
  }



}
