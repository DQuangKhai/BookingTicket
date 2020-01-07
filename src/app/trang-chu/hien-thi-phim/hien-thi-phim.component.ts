import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hien-thi-phim',
  templateUrl: './hien-thi-phim.component.html',
  styleUrls: ['./hien-thi-phim.component.css']
})
export class HienThiPhimComponent implements OnInit {
  @Input() danhSach: any[];
  settingsOwl: any
  constructor() { }

  ngOnInit() {
    this.initValiable()
  }

  initValiable() {
    this.settingsOwl = { 
      items: 3, 
      dots: false, 
      navigation: false,
      margin: 15,
      loop: true,
      autoplay: true
    }
  }
}
