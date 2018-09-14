import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store'
import { AppComponent } from './app.component';
import { IAppstate, rootReducer, INITIAL_STATE } from './store';
import { LoginComponent } from './login/login.component';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { appRoutes } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { ClassCardsComponent } from './class-cards/class-cards.component';
import { StudentCardsComponent } from './student-cards/student-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ClassDetailComponent,
    StudentDetailComponent,
    ClassCardsComponent,
    StudentCardsComponent
  ],
  imports: [
    BrowserModule, 
    NgReduxModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor (ngRedux: NgRedux<IAppstate>, devTools: DevToolsExtension){
    //inicializa la store
    var enhancers = isDevMode() ? [devTools.enhancer()] : [];

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers)
  }

}

