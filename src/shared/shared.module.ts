import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { MenuListComponent } from './components/menu-list/menu-list.component';
import { HighlightViewerComponent } from './components/highlight-viewer/highlight-viewer.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    MenuListComponent,
    HighlightViewerComponent,
    UserProfileComponent,
    ProjectCardComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterLink
  ],
  exports: [
    MenuListComponent,
    HighlightViewerComponent,
    UserProfileComponent,
    ProjectCardComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
