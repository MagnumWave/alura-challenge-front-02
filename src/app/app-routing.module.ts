import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorDeCodigoComponent } from './editor/editor-de-codigo/editor-de-codigo.component';
import { ComunidadeComponent } from './comunidade/comunidade/comunidade.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  { path: '', redirectTo: '/editor', pathMatch: 'full' },
  { path: 'editor', component: EditorDeCodigoComponent },
  { path: 'comunidade', component: ComunidadeComponent },
  { path: '**', component: NaoEncontradoComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
