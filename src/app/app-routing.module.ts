import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const Routes: Routes = [
  { path:"", loadChildren: "./trang-chu/trang-chu.module#TrangChuModule" },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes)
  ],
})
export class AppRoutingModule { }