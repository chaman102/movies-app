import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  BaseUrl:string='https://api.themoviedb.org/3';
  apiKey:string ='8c247ea0b4b56ed2ff7d41c9a833aa77';
  constructor(private http: HttpClient) {}

  getMovies(type:string='upcoming',count:number=12) {
    return this.http.get<MovieDto>(
      `${this.BaseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(switchMap(res=>{
        return of(res.results.slice(0,count));
      }));
  }
  searchMovies() {
    return this.http.get<MovieDto>(
      `${this.BaseUrl}/movie/popular?api_key=${this.apiKey}`).pipe(switchMap(res=>{
        return of(res.results);
      }));
  }
  searchTvs(type:string='upcoming',count:number=12) {
    return this.http.get<MovieDto>(
      `${this.BaseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(switchMap(res=>{
        return of(res.results.slice(0,count));
      }));
  }
}