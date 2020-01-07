import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const Routes: Routes = [
  { path:"", component: TrangchuComponent},
  { path:"detail/:id", component: ChiTietPhimComponent},
  { path:"signup", component: SignupComponent},
  { path:"signin", component: SigninComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ],
})
export class TrangChuRoutingModule { }