import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { ItemComponent } from './components/item/item.component';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { ItemsBannerTvComponent } from './components/items-banner-tv/items-banner-tv.component';
import { ItemsTvComponent } from './components/items-tv/items-tv.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { MovieComponent } from './pages/movie/movie.component';
import { TvshowComponent } from './pages/tvshow/tvshow.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    NotfoundComponent,
    SliderComponent,
    ItemsBannerComponent,
    ItemComponent,
    ItemsBannerTvComponent,
    ItemsTvComponent,
    TvshowsComponent,
    MovieComponent,
    TvshowComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
