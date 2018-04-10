import { PostService } from './servicos/post.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PanelComponent } from './panel/panel.component';
import { TimelinhaComponent } from './timelinha/timelinha.component';
import { PostInputComponent } from './post-input/post-input.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PanelComponent,
    TimelinhaComponent,
    PostInputComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
