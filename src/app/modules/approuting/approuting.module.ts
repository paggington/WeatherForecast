import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "../../components/homepage/homepage.component";

const routes:Routes=[
  {path:'',component:HomepageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{initialNavigation:'enabled'})
  ],
  exports:[RouterModule]
})
export class ApproutingModule { }
