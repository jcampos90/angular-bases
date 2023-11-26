import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';



@NgModule({
  declarations: [MainPageComponent, ListComponent, CreateComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class DbzModule { }
