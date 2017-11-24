import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
//import * as moment from 'moment';

export interface LancamentoFiltro {
  descricao: string;
  //dataVencimentoInicio: Date;
  //dataVencimentoFim: Date;

}




@Injectable()
export class LancamentoService{

  lancamentosUrl = 'http://localhost:8080/algamoney/lancamentos?resumo';


  constructor(private http: Http){

  }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();
    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTE0NTUyMDQsInVzZXJfbmFtZSI6ImFkbWluQGFsZ2Ftb25leS5jb20iLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiIzOTdmOGUxMy1kYjk5LTQ5NDktYjQzYy0zZDQwZmIxZjVlNzgiLCJjbGllbnRfaWQiOiJhbmd1bGFyIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl19.8GUfkOad5fh9WjUjiCZiJz3au7ssokJMGujRLEG84d0');

    if (filtro.descricao){
      params.set('descricao', filtro.descricao);
    }

   // if(filtro.dataVencimentoInicio){
    //  params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    //}

    //if(filtro.dataVencimentoFim){
    //  params.set('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    //}

    return this.http.get(`${this.lancamentosUrl}`, { headers, search: filtro })
      .toPromise().
      then(response => response.json().content);
  }
}
