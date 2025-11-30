import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        MovieListComponent,
        MovieDetailsComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule, AppRoutingModule, FormsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
