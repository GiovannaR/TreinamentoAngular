import { HttpModule } from '@angular/http';
import { LancamentoService } from './lancamentos/lancamento.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { CoreModule } from './core/core.module';


import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    LancamentosModule,
    PessoasModule,
    HttpModule

 //   Bootstrapcss
  ],
  providers: [ LancamentoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
