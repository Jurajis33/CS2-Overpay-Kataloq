import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-skin-detail-view',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxBadgeComponent],
  templateUrl: './skin-detail-view.component.html',
  styleUrls: ['./skin-detail-view.component.scss']
})
export class SkinDetailViewComponent {}
