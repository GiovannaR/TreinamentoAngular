import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent  {

  ultimoId = 0;
  nome = '';
  adicionado = false;
  funcionarioAdicionado = new EventEmitter(); 

  adicionar(){
    this.adicionado = true;
    const funcionario = ({
      id: ++this.ultimoId,
      nome: this.nome
    });
  }

}
