import { Post } from './../../model/post.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from './../servicos/post.service';
@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})
export class PostInputComponent implements OnInit {

  // @Output() novoPost = new EventEmitter();
  // post:Post;
  nome_Post:string = "";
  texto_Post:string = "";

  constructor(private postService:PostService){

  }
  ngOnInit() {
  }

  // qtdLikes:number,namePessoa:string,id:number,texto:string

  enviarPost(event){
    event.preventDefault();
    // this.novopost = new Post(0,this.nome_Post,4,this.texto_Post);
    
    this.postService.addPost(new Post(0,this.nome_Post,0,this.texto_Post))
      .subscribe(
        data => console.log(data),
        erro => console.log(erro)
      )
    // this.novoPost.emit(
    //   new Post( 0,this.nome_Post,5,this.texto_Post));
  }

}
