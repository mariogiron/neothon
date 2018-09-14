import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { ClassCardsComponent } from './class-cards/class-cards.component';
import { StudentCardsComponent } from './student-cards/student-cards.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const appRoutes: Routes = [
    {path: '', component: DashboardComponent, pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'clase/:id', component: ClassDetailComponent},
    {path: 'alumno/:id', component: StudentDetailComponent},
    {path: 'test', component: StudentCardsComponent},
    {path: '**', component: ErrorPageComponent},
]