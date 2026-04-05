import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { IgcGridLite } from 'igniteui-grid-lite';
import { defineComponents } from 'igniteui-webcomponents';
import { Subject, takeUntil } from 'rxjs';
import { EmployeesType } from '../models/northwind/employees-type';
import { NorthwindService } from '../services/northwind.service';

defineComponents(IgcGridLite);

@Component({
  selector: 'app-catalog-list-view',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent, FormsModule],
  templateUrl: './catalog-list-view.component.html',
  styleUrls: ['./catalog-list-view.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CatalogListViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public value?: string;
  public value1 = 0;
  public value2 = 0;
  public northwindEmployees: EmployeesType[] = [];

  constructor(
    public northwindService: NorthwindService,
  ) {}


  ngOnInit() {
    this.northwindService.getEmployees().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindEmployees = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public stringToNumber(value: string): number {
    return parseFloat(value);
  }
}
