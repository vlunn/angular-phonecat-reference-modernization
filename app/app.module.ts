import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PhoneListComponent } from './phone-list/phone-list.component.js';
import { Phone } from './core/phone/phone.service.js';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe.js';
import { AppRoutingModule } from './app-routing.module.js';
import { AppComponent } from './app.component.js';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component.js';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailComponent,
    CheckmarkPipe
  ],
  providers: [
    Phone
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
