import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'cranix-institutes-lists',
  templateUrl: './institutes-lists.page.html'
})
export class InstitutesListsPage {
  constructor(
    public translateService: TranslateService
  ) {}
}
