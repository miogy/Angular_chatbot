import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { ButtonComponent } from './section/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from './section/modal/modal.component';
import { CardComponent } from './section/modal/card/card.component';
import { SettingComponent } from './section/modal/setting/setting.component';
import { ToggleComponent } from './section/modal/toggle/toggle.component';

// tag를 만들어서 사용설정
@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    ButtonComponent,
    ModalComponent,
    CardComponent,
    SettingComponent,
    ToggleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
