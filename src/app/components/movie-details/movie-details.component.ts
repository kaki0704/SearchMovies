import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../services/movies.service";

@Component({
	selector: "app-movie-details",
	template: `
@if (!movie) {
  <div class="text-center text-warning">
    <img src="/assets/images/loading.gif" alt="loading">
  </div>
}

@if (movie) {
  <div class="row">
    <div class="col-md-4">
      <img [src]="movie.Poster" [alt]="movie.Title" class="img img-thumbnail" />
    </div>
    <div class="col-md-8">
      <h3>{{ movie.Title }}</h3>
      <table class="table">
        <tbody>
          <tr>
            <td>Director</td>
            <td>{{ movie.Director }}</td>
          </tr>
          <tr>
            <td>Plot</td>
            <td>{{ movie.Plot }}</td>
          </tr>
          <tr>
            <td>Year</td>
            <td>{{ movie.Year }}</td>
          </tr>
          <tr>
            <td>Genre</td>
            <td>{{ movie.Genre }}</td>
          </tr>
          <tr>
            <td>Actors</td>
            <td>{{ movie.Actors }}</td>
          </tr>
          <tr>
            <td>Boxoffice</td>
            <td>{{ movie.BoxOffice }}</td>
          </tr>
          <tr>
            <td>Released</td>
            <td>{{ movie.Released }}</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-primary" (click)="goBack()">Back</button>
    </div>
  </div>
}
    `,
	styles: [],
	standalone: false,
})
export class MovieDetailsComponent implements OnInit {
	movie: any;

	constructor(
		private service: MoviesService,
		private activatedRoute: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params) => {
			const id = params.imdbID;
			this.service.getMovieDetails(id).subscribe((resp) => (this.movie = resp));
		});
	}

	goBack() {
		window.history.back();
	}
}
