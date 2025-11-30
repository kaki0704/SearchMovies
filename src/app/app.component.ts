import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";

@Component({
	selector: "app-root",
	template: `
<app-header></app-header>
<div class="container">
  <!-- <app-home></app-home> -->
  <!-- <app-movie-list></app-movie-list> -->
  <router-outlet></router-outlet>
</div>
    `,
	styles: [],
	standalone: true,
	imports: [RouterOutlet, HeaderComponent],
})
export class AppComponent {
	title = "movie-search";
}
