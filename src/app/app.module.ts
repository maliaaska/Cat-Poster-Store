import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,} from '@angular/http';
import { AppComponent } from './app.component';
import { Routes } from "@angular/router";
import { RouterModule,} from '@angular/router';
import { MyListComponent } from './my-list/my-list.component';
import { Component } from '@angular/core';
import { MyHomeComponent } from './my-home/my-home.component';
import { PopupModule}  from 'ng2-opd-popup';
import { Http,Headers } from '@angular/http';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'my-list', component: MyListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyListComponent,
    MyHomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PopupModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
