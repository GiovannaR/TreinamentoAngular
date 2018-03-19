import { PessoasService } from './pessoas/pessoas.service';
import { HttpModule } from '@angular/http';
import { LancamentoService } from './lancamentos/lancamento.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { CoreModule } from './core/core.module';
import {ToastyModule} from 'ng2-toasty';

import {ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
//import { PessoaPesquisarComponent } from './pessoas-pesquisar/pessoas-pesquisar.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
    //PessoaPesquisarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    LancamentosModule,
    PessoasModule,
    HttpModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule
 //   Bootstrapcss
  ],
  providers: [ LancamentoService,
    PessoasService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
