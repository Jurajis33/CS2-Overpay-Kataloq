import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IgxPieChartModule, IgxCategoryChartModule } from 'igniteui-angular-charts';
import { StatsViewComponent } from './stats-view.component';

describe('StatsViewComponent', () => {
  let component: StatsViewComponent;
  let fixture: ComponentFixture<StatsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsViewComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IgxPieChartModule, IgxCategoryChartModule],
      teardown: { destroyAfterEach: false }
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
