import { LancamentoService } from './../lancamento.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Lancamento } from './../../core/model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { PessoasService } from './../../pessoas/pessoas.service';
import { CategoriaService } from './../../categorias/categoria.service';


@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {


  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categorias = [];

  pessoas = [];

  lancamento = new Lancamento();

  constructor(
    private categoriaService: CategoriaService,
    private pessoasService: PessoasService,
    private lancamentoservice: LancamentoService,
    private errorhandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.listarTodasCategorias();
    this.listarTodasPessoas();
  }

  salvar(form: FormControl){
    this.lancamentoservice.adicionar(this.lancamento)
    .then(() => {
     // console.log(this.lancamento);
    })
  }

  listarTodasCategorias(){
    this.categoriaService.listarTodas()
     .then(categoria => {
       this.categorias = categoria.map(c => {
       return { label: c.nome, value: c.codigo };
     });
    })
    .catch(erro => this.errorhandler.handle(erro));
  }

  listarTodasPessoas(){
    this.pessoasService.pesquisar()
     .then(pessoa => {
       this.pessoas = pessoa.map(c => {
       return { label: c.nome, value: c.codigo };
     });
    })
    .catch(erro => this.errorhandler.handle(erro));
  }

}
