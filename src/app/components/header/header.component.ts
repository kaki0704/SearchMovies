import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";

@Component({
	selector: "app-header",
	template: `
<div class="alert alert-primary">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h3 class="app-clickable" [routerLink]="['/home']">Movie Search</h3>
      </div>
      <div class="col-md-8">
        <form (submit)="submitHandler($event)">
          <input
            type="text"
            name="queryTerm"
            autofocus
            [(ngModel)]="queryTerm"
            placeholder="search movies"
            class="form-control"
          />
        </form>
      </div>
    </div>
  </div>
</div>
    `,
	styles: [],
	standalone: true,
	imports: [RouterLink, FormsModule],
})
export class HeaderComponent implements OnInit {
	queryTerm: string;

	constructor(private router: Router) {}

	ngOnInit() {}

	submitHandler(evt) {
		evt.preventDefault();
		this.router.navigate(["/movies"], { queryParams: { q: this.queryTerm } });
	}
}
