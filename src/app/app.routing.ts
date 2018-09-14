import { Routes } from '@angular/router';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

export const appRoutes: Routes = [
    {path: '', component: DashboardComponent, pathMatch: 'full', canActivate: [LoginGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'clase/:id', component: ClassDetailComponent, canActivate: [LoginGuard]},
    {path: 'alumno/:id', component: StudentDetailComponent, canActivate: [LoginGuard]}
]
