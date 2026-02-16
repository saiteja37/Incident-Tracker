import { Routes } from '@angular/router';
import { IncidentListComponent } from './features/incidents/incident-list/incident-list.component';
import { IncidentDetailComponent } from './features/incidents/incident-detail/incident-detail.component';
import { IncidentCreateComponent } from './features/incidents/incident-create/incident-create.component';

export const routes: Routes = [
  { path: '', component: IncidentListComponent },
  { path: 'create', component: IncidentCreateComponent },
  { path: 'incidents/:id', component: IncidentDetailComponent }
];
