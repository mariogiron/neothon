import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

export const appRoutes: Routes = [
    {path: '', component: DashboardComponent, pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'clase/:id', component: ClassDetailComponent},
    {path: 'alumno/:id', component: StudentDetailComponent}
]