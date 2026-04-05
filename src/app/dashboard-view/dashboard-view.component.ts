import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { IgxCategoryChartModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-dashboard-view',
  imports: [IGX_CARD_DIRECTIVES, IgxPieChartModule, IgxCategoryChartModule, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective],
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];

  constructor(
    public financialService: FinancialService,
  ) {}


  ngOnInit() {
    this.financialService.getBoxOfficeRevenue().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.financialBoxOfficeRevenue = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
