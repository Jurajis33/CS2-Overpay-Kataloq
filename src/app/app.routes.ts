import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { CatalogListViewComponent } from './catalog-list-view/catalog-list-view.component';
import { AddSkinViewComponent } from './add-skin-view/add-skin-view.component';
import { SkinDetailViewComponent } from './skin-detail-view/skin-detail-view.component';
import { EditSkinViewComponent } from './edit-skin-view/edit-skin-view.component';
import { StatsViewComponent } from './stats-view/stats-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'dashboard-view', component: DashboardViewComponent, data: { text: 'Dashboard-View' } },
  { path: 'catalog-list-view', component: CatalogListViewComponent, data: { text: 'Catalog-List-View' } },
  { path: 'add-skin-view', component: AddSkinViewComponent, data: { text: 'Add-Skin-View' } },
  { path: 'skin-detail-view', component: SkinDetailViewComponent, data: { text: 'Skin-Detail-View' } },
  { path: 'edit-skin-view', component: EditSkinViewComponent, data: { text: 'Edit-Skin-View' } },
  { path: 'stats-view', component: StatsViewComponent, data: { text: 'Stats-View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
