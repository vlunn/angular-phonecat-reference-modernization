declare var angular: angular.IAngularStatic;
import { downgradeComponent } from '@angular/upgrade/static';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Phone, PhoneData } from '../core/phone/phone.service.js';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail/phone-detail.template.html',
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(activatedRoute: ActivatedRoute, phone: Phone) {
    phone.get(activatedRoute.snapshot.paramMap.get('phoneId'))
      .subscribe((p: PhoneData) => {
      this.phone = p;
      this.setImage(p.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

angular.module('phoneDetail')
  .directive(
    'phoneDetail',
    downgradeComponent({component: PhoneDetailComponent}) as angular.IDirectiveFactory
  );
