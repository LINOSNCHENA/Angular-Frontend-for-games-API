import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActingchoicesComponent } from './actingchoices/actingchoices.component';
import { ActingselectComponent } from './actingselect/actingselect.component';
import {RouterModule ,Routes} from '@angular/router';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

const appRoutes :Routes = [
  {path : '',component: ActingchoicesComponent},
  {path : 'select',component: ActingselectComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ActingchoicesComponent,
    ActingselectComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, 
    RouterModule.forRoot(appRoutes), HttpModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
