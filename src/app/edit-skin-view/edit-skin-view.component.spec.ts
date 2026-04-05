import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { EditSkinViewComponent } from './edit-skin-view.component';

describe('EditSkinViewComponent', () => {
  let component: EditSkinViewComponent;
  let fixture: ComponentFixture<EditSkinViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSkinViewComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSkinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
