import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { ReviewComponent } from './review/review.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { FormLienHeComponent } from './form-lien-he/form-lien-he.component';
import { ThongTinLienHeComponent } from './thong-tin-lien-he/thong-tin-lien-he.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ItemTinTucComponent } from './item-tin-tuc/item-tin-tuc.component';
import { QuanTriGheModule } from '../quan-tri-ghe/quan-tri-ghe.module';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { HienThiPhimComponent } from './hien-thi-phim/hien-thi-phim.component';
import { MovieGateway } from '../gateways/movie.gateway';
import { OwlModule } from 'ngx-owl-carousel';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { TrangChuRoutingModule } from './trang-chu-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent, 
    SliderComponent, 
    LoaiPhimComponent, 
    ItemPhimComponent, 
    TinTucComponent, 
    DienAnhComponent, 
    ReviewComponent, 
    KhuyenMaiComponent,
    LienHeComponent, 
    FormLienHeComponent, 
    ThongTinLienHeComponent,
    TrangchuComponent,
    ItemTinTucComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    HienThiPhimComponent,
    ChiTietPhimComponent
  ],

  imports: [
    CommonModule,
    QuanTriGheModule,
    HttpClientModule,
    FormsModule,
    OwlModule,
    TrangChuRoutingModule,
    RouterModule
  ],

  exports: [
    TrangchuComponent
  ],
  providers: [
    MovieGateway
  ]
})
export class TrangChuModule { }
