import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MaterialModule } from '../app/material';
import { AppslistComponent } from './appslist/appslist.component';
import { LoginComponent } from './login/login.component';
import {  CategoryPipe } from './appslist/bold.pipe';
import { FormsModule } from '@angular/forms';
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
    CategoryPipe,
    AppslistComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
