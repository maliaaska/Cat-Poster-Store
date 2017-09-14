import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Routes } from "@angular/router";
import { RouterModule,} from '@angular/router';
import { MyListComponent } from './my-list/my-list.component';
import { Component } from '@angular/core';
import { MyHomeComponent } from './my-home/my-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'my-list', component: MyListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyListComponent,
    MyHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
