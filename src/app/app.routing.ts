import { PostInputComponent } from './post-input/post-input.component';
import {Routes, RouterModule} from "@angular/router"
import { NgModule } from '@angular/core';
import { TimelinhaComponent } from './timelinha/timelinha.component';

const APP_ROUTES : Routes = [

    {path:"", redirectTo:"timelinha",pathMatch:"full"},
    {path:"timelinha", component:TimelinhaComponent},
    {path:"postar", component:PostInputComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
  })

export class routing {

}