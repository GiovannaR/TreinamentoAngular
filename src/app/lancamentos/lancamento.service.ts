import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensporpagina = 4;

}


@Injectable()
export class LancamentoService{

  lancamentosUrl = 'http://localhost:8449/lancamentos?resumo';


  constructor(private http: Http){

  }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();
    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTk0OTI2OTcsInVzZXJfbmFtZSI6ImFkbWluQGFsZ2Ftb25leS5jb20iLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiI4YjBlOGYzNC1iNTg2LTRjY2UtYmE0ZC02OWVmZWQ4ZDJlZmQiLCJjbGllbnRfaWQiOiJhbmd1bGFyIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl19.3Cc3GSdJ11Ecx1qnt7uhBPTlQbr-nsAPxNfQ4CGYjgQ');

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensporpagina.toString());

    if (filtro.descricao){
      params.set('descricao', filtro.descricao);
    }

    if(filtro.dataVencimentoInicio){
      params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if(filtro.dataVencimentoFim){
      params.set('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.lancamentosUrl}`, { headers, search: params })
      .toPromise().
      then(response => {
        const responseJson = response.json();
        const lancamentos = responseJson.content;
        const resultado = {
          lancamentos: lancamentos,
          total: responseJson.totalElements
        };

        return resultado;
      })
  }
}
