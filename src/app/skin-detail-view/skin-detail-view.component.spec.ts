import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxBadgeComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES } from 'igniteui-angular';
import { SkinDetailViewComponent } from './skin-detail-view.component';

describe('SkinDetailViewComponent', () => {
  let component: SkinDetailViewComponent;
  let fixture: ComponentFixture<SkinDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkinDetailViewComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxBadgeComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
