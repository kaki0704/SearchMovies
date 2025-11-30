import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { beforeEach, describe, expect, it } from "vitest";

import { MovieListComponent } from "./movie-list.component";

describe("MovieListComponent", () => {
	let component: MovieListComponent;
	let fixture: ComponentFixture<MovieListComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [MovieListComponent],
			providers: [
				provideRouter([]),
				provideHttpClient(),
				provideHttpClientTesting(),
			],
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MovieListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
