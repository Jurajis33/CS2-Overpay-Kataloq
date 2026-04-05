import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-edit-skin-view',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent, FormsModule],
  templateUrl: './edit-skin-view.component.html',
  styleUrls: ['./edit-skin-view.component.scss']
})
export class EditSkinViewComponent {
  public value?: string;
  public value1 = 0;
  public value2 = 0;
  public value3 = 0;
  public value4?: string;
  public value5?: string;
  public value6?: string;
  public value7?: string;


  public stringToNumber(value: string): number {
    return parseFloat(value);
  }
}
