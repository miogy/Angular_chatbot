import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { ButtonComponent } from './section/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from './section/modal/modal.component';

// tag를 만들어서 사용설정
@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    ButtonComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
