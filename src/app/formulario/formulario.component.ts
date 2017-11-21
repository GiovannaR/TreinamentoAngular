import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


class Cliente{
  nome: string = undefined;
  email: string;
  profissao = '';
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

  cliente = new Cliente;
  profissoes = ['Programador', 'Empresário', 'Outra'];

  salvar(form: NgForm){
    //this.cliente.nome = form.value.nome;
    //this.cliente.email = form.value.email;
    //this.cliente.profissao = form.value.profissao;

    console.log(form.value);
    form.reset(); //limpa o estado tambem
  }
}
