import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PhoneListComponent } from './phone-list/phone-list.component.js';
import { routeParamsProvider } from './ajs-upgraded-providers.js';
import { Phone } from './core/phone/phone.service.js';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component.js';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe.js';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpModule,
    FormsModule,
  ],
  declarations: [
    PhoneListComponent,
    PhoneDetailComponent,
    CheckmarkPipe
  ],
  entryComponents: [
    PhoneListComponent,
    PhoneDetailComponent
  ],
  providers: [
    Phone,
    routeParamsProvider
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}
