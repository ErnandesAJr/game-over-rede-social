import { PostService } from './../servicos/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-timelinha',
  templateUrl: './timelinha.component.html',
  styleUrls: ['./timelinha.component.css']
})
export class TimelinhaComponent implements OnInit {

  posts:Array<Post> =[];

  // posts:Array<Post> = [
  //   new Post(30,"Ernandes",1,"Eu sou lindao"),new Post(10,"Samuel",2,"Eu sou lindao também"),
  //   new Post(0,"Rodrigo",3,"Eu sou lindao não ")
  // ];

  constructor(private postService:PostService) { }

  ngOnInit() {
   this.postService.getAll().subscribe(
     data => {
       this.posts = data;
     },
     error => console.log(error),
   );
  }

  capturarEvento(e){
    console.log(e);
  }

}
