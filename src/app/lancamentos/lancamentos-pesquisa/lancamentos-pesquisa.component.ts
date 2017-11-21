import { LancamentoService, LancamentoFiltro } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  ngOnInit(){
    this.pesquisar();
  }

  // tslint:disable-next-line:member-ordering
  descricao: string;
  // tslint:disable-next-line:member-ordering
  dataVencimentoInicio: Date;
  // tslint:disable-next-line:member-ordering
  dataVencimentoFim: Date;
  // tslint:disable-next-line:member-ordering
  lancamentos = [];

  constructor(private lancamentoservice: LancamentoService ) {

  }

  pesquisar() {
    const filtro: LancamentoFiltro = {
      descricao: this.descricao,
      dataVencimentoInicio: this.dataVencimentoInicio,
      dataVencimentoFim: this.dataVencimentoFim
    };

    this.lancamentoservice.pesquisar(filtro)
      .then(lancamento => this.lancamentos = lancamento);
  }

}
