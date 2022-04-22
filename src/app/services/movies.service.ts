import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto,Movie,MovieVideoDto, MovieImages, MovieCredits } from '../models/movie';
import { TvshowDto,Tvshow } from '../models/tvshow';
import { switchMap } from 'rxjs/operators';
import { COMMON } from '../constants/common';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  BaseUrl:string='https://api.themoviedb.org/3';
  apiKey:string ='8c247ea0b4b56ed2ff7d41c9a833aa77';
  constructor(private http: HttpClient) {}

  getMovies(type:string='upcoming',count:number=COMMON.rows) {
    return this.http.get<MovieDto>(
      `${this.BaseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(switchMap(res=>{
        return of(res.results.slice(0,count));
      }));
  }
  getMovieVideos(id:number) {
    return this.http.get<MovieVideoDto>(
      `${this.BaseUrl}/movie/${id}/videos?api_key=${this.apiKey}`).pipe(switchMap(res=>{
        return of(res.results);
      }));
  }
  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.BaseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
  }
  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(`${this.BaseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }
  getPageTvshow(page:number=1,count:number=COMMON.rows) {
    return this.http.get<TvshowDto>(
      `${this.BaseUrl}/tv/popular?page=${page}&api_key=${this.apiKey}`).pipe(switchMap(res=>{
        return of(res.results.slice(0,count));
      }));
  }
  searchMovies(page:number=1,count:number=COMMON.rows) {
    return this.http.get<MovieDto>(
      `${this.BaseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(switchMap(res=>{
        return of(res.results.slice(0,count));
      }));
  }
  getMovie(id: string) {
    return this.http.get<Movie>(`${this.BaseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }
  getTv(id: string) {
    return this.http.get<Tvshow>(`${this.BaseUrl}/tv/${id}?api_key=${this.apiKey}`);
  }

  searchTvs(type:string='popular',count:number=COMMON.rows) {
    return this.http.get<TvshowDto>(
      `${this.BaseUrl}/tv/${type}?api_key=${this.apiKey}`).pipe(switchMap(res=>{
        console.log('Data:', res.results)
        return of(res.results.slice(0,count));
      }));
  }
}
