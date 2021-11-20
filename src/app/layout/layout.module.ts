import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class LayoutModule { }
