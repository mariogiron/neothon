import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store'
import { AppComponent } from './app.component';
import { IAppstate, rootReducer, INITIAL_STATE } from './store';
import { LoginComponent } from './login/login.component';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    NgReduxModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule
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

