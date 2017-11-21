import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    { nome: 'Amanda Mansur', cidade: 'Uberlandia', estado: 'MG', status: 'Ativo'},
    { nome: 'Julia Riqueti', cidade: 'Belo Horizonte', estado: 'MG', status: 'Inativo'},
    { nome: 'Isabela Antunes', cidade: 'São Paulo', estado: 'SP', status: 'Ativo'},
    { nome: 'Luis Gustavo', cidade: 'Rio de Janeiro', estado: 'RG', status: 'Ativo'},
    { nome: 'Laura Abreu', cidade: 'Curitiba', estado: 'PR', status: 'Inativo'},
    { nome: 'Lauro Cordeu', cidade: 'Florianópolis', estado: 'SC', status: 'Ativo'},
    { nome: 'Catarina Julios', cidade: 'Salvador', estado: 'BA', status: 'Inativo'},
    { nome: 'Lunara Lais Castro', cidade: 'Vitória', estado: 'ES', status: 'Ativo'},
    { nome: 'Cara Lavrel', cidade: 'Goiânia', estado: 'GO', status: 'Inativo'},
    { nome: 'Lucas Santos', cidade: '	Natal', estado: 'RN', status: 'Ativo'},
  ];

}
