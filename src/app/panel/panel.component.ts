import { PostService } from './../servicos/post.service';
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Post } from './../../model/post.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

    @Input() post:Post
    saberEditou: Boolean =false;
    posti:Post = null;
    // numberLikes:number = this.post.qtdLikes;
  // @Output() levandoLike = new EventEmitter<Post>();// isso tbm
    
  constructor(private postService:PostService){

  }

  ngOnInit() {
  }

    excluirPost(post:Post){
      this.postService.removePostId(post).subscribe(
        data => console.log(data),
        error => console.log(error)
      );

    }

    editarPost(post:Post){
      this.postService.editarPost(post).subscribe(
        data => console.log(data),
        error => console.log(error)
      );

      this.posti = null;
    }

    alterarFlag(post){
      this.posti = post;
    }

    addLike(post:Post){
      // this.postService.addLike(this.post);
      post.qtdLikes++;
      this.postService.addLike(post).subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    }
}



