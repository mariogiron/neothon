import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { isDevMode, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { IAppstate, INITIAL_STATE, rootReducer } from './store';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ClassDetailComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor (ngRedux: NgRedux<IAppstate>, devTools: DevToolsExtension){
    //inicializa la store
    var enhancers = isDevMode() ? [devTools.enhancer()] : [];

    let estado_inicial = null
    if (localStorage.getItem('redux_data')) {
      estado_inicial = JSON.parse(localStorage.getItem('redux_data'))
    } else {
      estado_inicial = INITIAL_STATE
    }

    ngRedux.configureStore(rootReducer, estado_inicial, [], enhancers)
  }

}

