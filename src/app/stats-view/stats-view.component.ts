import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { IgxCategoryChartModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { IgcGridLite } from 'igniteui-grid-lite';
import { defineComponents } from 'igniteui-webcomponents';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexLegend, ApexMarkers, ApexPlotOptions, ApexTheme, ChartComponent } from 'ng-apexcharts';
import { Subject, takeUntil } from 'rxjs';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { EmployeesType } from '../models/northwind/employees-type';
import { FinancialService } from '../services/financial.service';
import { NorthwindService } from '../services/northwind.service';

defineComponents(IgcGridLite);

@Component({
  selector: 'app-stats-view',
  imports: [IgxPieChartModule, IgxCategoryChartModule, ChartComponent],
  templateUrl: './stats-view.component.html',
  styleUrls: ['./stats-view.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StatsViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  private _box_Office_Revenue: BoxOfficeRevenueType[] = [];
  public get box_Office_Revenue(): BoxOfficeRevenueType[] {
    return this._box_Office_Revenue;
  }
  public set box_Office_Revenue(value: BoxOfficeRevenueType[]) {
    this._box_Office_Revenue = value;
    this.series = this.getSeries();
  }
  public series: ApexAxisChartSeries = this.getSeries();
  public chart: ApexChart = {
    type: 'bar',
    background: 'theme:surface-500',
    zoom: {
      enabled: true
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)'
  };
  public plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: true
    }
  };
  public theme: ApexTheme = {
    mode: 'dark'
  };
  public legend: ApexLegend = {
    show: false
  };
  public markers: ApexMarkers = {
    size: 6
  };
  public dataLabels: ApexDataLabels = {
    enabled: false
  };
  public financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];
  public northwindEmployees: EmployeesType[] = [];

  constructor(
    public financialService: FinancialService,
    public northwindService: NorthwindService,
  ) {}


  ngOnInit() {
    this.financialService.getBoxOfficeRevenue().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.box_Office_Revenue = data
    );
    this.financialService.getBoxOfficeRevenue().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.financialBoxOfficeRevenue = data
    );
    this.northwindService.getEmployees().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindEmployees = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getSeries(): ApexAxisChartSeries {
    return [
      {
        name: 'TotalWorldBoxOfficeRevenue',
        data: this.box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'TotalWorldBoxOfficeRevenue'
          ]
        }
      },
      {
        name: 'HighestGrossingMovieInSeries',
        data: this.box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'HighestGrossingMovieInSeries'
          ]
        }
      }
    ];
  }
}
