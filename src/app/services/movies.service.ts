import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import type { Observable } from "rxjs";

const baseUrl: string = "https://www.omdbapi.com/?apikey=82252c6d";

@Injectable({
	providedIn: "root",
})
export class MoviesService {
	constructor(private http: HttpClient) {}

	searchMovies(searchTerm: string): Observable<any> {
		return this.http.get(baseUrl, { params: { s: searchTerm } });
	}

	getMovieDetails(imdbID: string): Observable<any> {
		return this.http.get(baseUrl, { params: { i: imdbID } });
	}
}
