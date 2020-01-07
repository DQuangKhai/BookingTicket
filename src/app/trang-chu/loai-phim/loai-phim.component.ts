import { Component, OnInit } from '@angular/core';
import { MovieGateway } from 'src/app/gateways/movie.gateway';

@Component({
  selector: 'app-loai-phim',
  templateUrl: './loai-phim.component.html',
  styleUrls: ['./loai-phim.component.css']
})
export class LoaiPhimComponent implements OnInit {

  dangChieuStatus: boolean = true;
  danhSachPhim: any[] = []

  constructor(
    private movieGateway: MovieGateway
  ) { }


  HienPhimDangChieu(){
    this.dangChieuStatus = true;
  }

  HienPhimSapChieu(){
    this.dangChieuStatus = false;
  }

  ngOnInit() {
    this.initService()
  }

  initService() {
    this.movieGateway.fetchMovieList().subscribe((res: any) => {
      console.log(res);
      this.danhSachPhim = res;
    })
  }

}
