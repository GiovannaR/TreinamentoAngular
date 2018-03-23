import { Http, Headers } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class CategoriaService implements OnInit {

  categoriaUrl = 'http://localhost:8449/categorias';

  constructor(private http: Http) { }

  ngOnInit(){
    this.listarTodas();
  }

  listarTodas(): Promise<any> {
    const headers = new Headers();
    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjE5MTcyNDksInVzZXJfbmFtZSI6ImFkbWluQGFsZ2Ftb25leS5jb20iLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiIyYWEwZjA2OS0xMGE2LTQyYjctYjZmYi00NDg3OWRhODkwNGMiLCJjbGllbnRfaWQiOiJhbmd1bGFyIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl19.9DSiNRNoLxDTkNM23pxHfmbWGgK4K-v08R6WeOIO2LY');

    return this.http.get(`${this.categoriaUrl}`, { headers })
    .toPromise().
    then(response => response.json());
  }
}
