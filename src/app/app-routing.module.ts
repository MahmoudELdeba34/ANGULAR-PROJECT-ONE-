import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProtofolioComponent } from './protofolio/protofolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"",component:HomeComponent,title:"HOME"},
  {path:"about",component:AboutComponent,title:"ABOUT"},
  {path:"protofolio",component:ProtofolioComponent,title:"PROTOFOLIO"},
  {path:"contact",component:ContactComponent,title:"CONTACT"},
  {path:"**",component:NotFoundComponent,title:"NOT FOUND 404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
