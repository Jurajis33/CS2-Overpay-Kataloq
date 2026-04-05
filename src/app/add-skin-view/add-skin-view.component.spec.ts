import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { AddSkinViewComponent } from './add-skin-view.component';

describe('AddSkinViewComponent', () => {
  let component: AddSkinViewComponent;
  let fixture: ComponentFixture<AddSkinViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSkinViewComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSkinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
