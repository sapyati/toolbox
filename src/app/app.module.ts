import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MaterialModule } from '../app/material';
import { AppslistComponent } from './appslist/appslist.component';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'Appslist',
    component: AppslistComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AppslistComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
