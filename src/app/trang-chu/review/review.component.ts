import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  DanhSachReview = [
    {TieuDeTinTuc:"Review 1", HinhAnh:'../../../assets/img/chi-chi-em-em-tuong-phim-tinh-cam-hoa-ra-hack-nao-muon-tung-ca-dau-15764005900817.jpg'},
    {TieuDeTinTuc:"Review 1", HinhAnh:'../../../assets/img/chi-chi-em-em-tuong-phim-tinh-cam-hoa-ra-hack-nao-muon-tung-ca-dau-15764005900817.jpg'},
    {TieuDeTinTuc:"Review 1", HinhAnh:'../../../assets/img/chi-chi-em-em-tuong-phim-tinh-cam-hoa-ra-hack-nao-muon-tung-ca-dau-15764005900817.jpg'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
