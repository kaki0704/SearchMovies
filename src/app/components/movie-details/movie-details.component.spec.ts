import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { beforeEach, describe, expect, it } from "vitest";

import { MovieDetailsComponent } from "./movie-details.component";

describe("MovieDetailsComponent", () => {
	let component: MovieDetailsComponent;
	let fixture: ComponentFixture<MovieDetailsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [MovieDetailsComponent],
			providers: [
				provideRouter([]),
				provideHttpClient(),
				provideHttpClientTesting(),
			],
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MovieDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
