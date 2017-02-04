import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileOverviewComponent } from './overview/overview.component';
import { ProfileCreateComponent, ProfileEditComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: ProfileOverviewComponent},
  { path: 'edit/:username', component: ProfileEditComponent},
  { path: 'create', component: ProfileCreateComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);