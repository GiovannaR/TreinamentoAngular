import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { SharedModule } from './../shared/shared.module';

import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    InputTextareaModule,
    TooltipModule,
    DataTableModule,
    ButtonModule,
    InputMaskModule,
    SharedModule


  ],
  declarations: [PessoaCadastroComponent,
    PessoasGridComponent,
    PessoasPesquisaComponent],
  exports: [PessoaCadastroComponent,
    PessoasPesquisaComponent,
  ]
})
export class PessoasModule { }
