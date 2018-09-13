import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
    {path: '', component: LoginComponent, pathMatch: 'full'}
]