import { LancamentoService, LancamentoFiltro } from './../lancamento.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { DatePipe } from '@angular/common';
import { ToastyService } from 'ng2-toasty';


@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  totalregistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [];
  @ViewChild('tabela') grid;

  constructor(private lancamentoservice: LancamentoService
              private toasty: ToastyService,
              private confirmation: ConfirmationService
            ) { }

  ngOnInit(){
      this.pesquisar();
    }


  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentoservice.pesquisar(this.filtro)
      .then(resultado => {
        this.lancamentos = resultado.lancamentos;
        this.totalregistros = resultado.total;
      });
  }

  aoMudarPagina(event: LazyLoadEvent){
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(Lancamento: any){
    this.confirmation.confirm({
      message: 'Tem certeaz que deseja excluir?',
      accept: () => {
        this.excluir(Lancamento);
      }
    });
  }

  excluir(lancamento: any){
    this.lancamentoservice.excluir(lancamento.codigo)
    .then(() => {
      if (this.grid.first === 0){
        this.pesquisar();
      }else{
        this.grid.first = 0;
      }
      this.toasty.success('Lançamento excluído com sucesso!');
    });
  }

}
