import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
<div class="row">
  <div class="col-md-4" col-xs-12 col-sm-12></div>
  <div class="col-md-4">
    <img src="/assets/images/movie.jpg" class="img img-thumbnail" alt="movie" />
    <hr />
  </div>
  <div class="col-md-4"></div>
</div>
    `,
    styles: [],
    standalone: true
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
