import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { MoviesService } from "../../services/movies.service";

@Component({
	selector: "app-movie-list",
	template: `
<div class="row">
  @for (m of movies; track m) {
    <div class="card col-md-4 col-sm-6 col-xs-12">
      <div class="alert alert-secondary app-clickable"
        [routerLink]="['/movie-details', m.imdbID]">
        <div class="card-body">
          <h5 class="card-title">{{ m.Title }}</h5>
          <p>{{ m.Year }}</p>
          <img [src]="m.Poster" [alt]="m.Title" class="card-img-top" />
        </div>
      </div>
    </div>
  }
</div>
    `,
	styles: [],
	standalone: true,
	imports: [RouterLink],
})
export class MovieListComponent implements OnInit {
	movies: any[];

	constructor(
		private service: MoviesService,
		private activatedRoute: ActivatedRoute,
	) {}

	ngOnInit() {
		this.activatedRoute.queryParams.subscribe((qparams) => {
			const q = qparams.q;
			this.service
				.searchMovies(q)
				.subscribe((resp) => (this.movies = resp.Search));
		});
	}
}
