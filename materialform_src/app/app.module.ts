import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyMaterialModule } from './material.module';
// import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    // RouterModule.forRoot([
    //   { path: '', redirectTo: '/', pathMatch: 'full' },
    //   { path: 'register', component: RegisterComponent },
    //   { path: 'login', component: LoginComponent },


    // ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
