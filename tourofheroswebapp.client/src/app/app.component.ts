import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    HeroesComponent
  ]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  forecasts: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/weatherforecast').subscribe(data => {
      this.forecasts = data;
    });
  }
}
