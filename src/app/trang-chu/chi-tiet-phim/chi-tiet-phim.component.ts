import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailGateway } from 'src/app/gateways/movie-detail.gateway';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.css']
})
export class ChiTietPhimComponent implements OnInit, OnDestroy {
  maPhim: string = '';
  detailFilm: any = {}
  // sub
  subParams: Subscription
  subFetchFilm: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieDetailGateway:MovieDetailGateway
  ) { }

  ngOnInit() {
    this.initSub()
  }

  initSub() {
    this.getParams()
  }

  getParams() {
    this.subParams = this.activatedRoute.params.subscribe(params => {
      this.maPhim = params.id
      this.fetchDetailFilm()
    });
  }

  fetchDetailFilm(){
    //TODO get api and show display
    this.subFetchFilm = this.movieDetailGateway.fetchMovieDetail(this.maPhim).subscribe(res => {
      console.log(res);
      this.detailFilm = res
    })
  }

  ngOnDestroy(){
    this.subParams.unsubscribe()
    this.subFetchFilm.unsubscribe()
  }
}
