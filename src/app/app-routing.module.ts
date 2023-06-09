import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorDeCodigoComponent } from './components/editor-de-codigo/editor-de-codigo.component';
import { ComunidadeComponent } from './components/comunidade/comunidade.component';
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component';

export const routes: Routes = [
  { path: '', redirectTo: '/editor/0', pathMatch: 'full' },
  { path: 'editor/:id', component: EditorDeCodigoComponent },
  { path: 'comunidade', component: ComunidadeComponent },
  { path: '**', component: NaoEncontradoComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
