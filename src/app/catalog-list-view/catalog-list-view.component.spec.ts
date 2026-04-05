import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IgxButtonDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES } from 'igniteui-angular';
import { CatalogListViewComponent } from './catalog-list-view.component';

describe('CatalogListViewComponent', () => {
  let component: CatalogListViewComponent;
  let fixture: ComponentFixture<CatalogListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogListViewComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IgxButtonDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
