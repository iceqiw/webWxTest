import './rxjs-extensions'

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import '../assets/css/styles.css';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {AppRoutingModule} from './app.routing.module';


@NgModule({
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    bootstrap: [AppComponent],
    providers: []
})

export class AppModule {
}