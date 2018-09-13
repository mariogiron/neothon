import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux} from '@angular-redux/store'
import { AppComponent } from './app.component';
import { IAppstate, rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor (ngRedux: NgRedux<IAppstate>){
    //inicializa la store
    ngRedux.configureStore(rootReducer, INITIAL_STATE)
  }

}

