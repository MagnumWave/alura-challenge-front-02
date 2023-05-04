import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MenuListComponent } from './components/menu-list/menu-list.component';
import { HighlightViewerComponent } from './components/highlight-viewer/highlight-viewer.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ToastComponent } from './components/toast/toast.component';
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    MenuListComponent,
    HighlightViewerComponent,
    UserProfileComponent,
    ProjectCardComponent,
    SearchBarComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    NgbToastModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    MenuListComponent,
    HighlightViewerComponent,
    UserProfileComponent,
    ProjectCardComponent,
    SearchBarComponent,
    ToastComponent
  ]
})
export class SharedModule { }
