import { Injectable } from '@angular/core';
import { Post } from '../../model/post.model';


import { Observable } from 'rxjs/Observable';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'


@Injectable()
export class PostService {

  static url = "http://rest.learncode.academy/api/ernandes/posts";

  constructor(private http: Http) { }

  posts:Array<Post> = []; 
  // [
  //   new Post(30,"Ernandes",1,"Eu sou lindao"),new Post(10,"Samuel",2,"Eu sou lindao também"),
  //   new Post(0,"Rodrigo",3,"Eu sou lindao não ")
  // ];


  getPostId(id:number):Post {
    for(let post of this.posts){
      if(id === post.getId()){
        return post;
      }
    }
    //tem q fazer o teste se nao tiver o post com aquele id
  }

  // getAll(){
  //   return this.http.get(PostService.url)
  //   .map((response:Response) => {
  //     this.posts = response.json();
  //     return response.json()
  //   })
  //    .catch((error:Response) => Observable.throw(error));
  // }


  getAll() {
    return this.http.get(PostService.url)
      .map((response: Response) => {
          let posts = [];
          for (let post of response.json()) {
            posts.push(new Post(post.qtdLikes,post.nomePessoa,post.id,post.texto ));
          }
          this.posts = posts;
          return this.posts;
        })
        .catch((error: Response) => Observable.throw(error));
  }

  addPost(post: Post){

    return this.http.post(PostService.url,post)
      .map((response:Response) => {
        this.posts.push(response.json())
        return response.json(); 
      })
      .catch((error:Response) => Observable.throw(error));
    // this.posts.push(post);
  }

  removePostId(id: Post) {
    // if (id === this.getPostId(id).id) {
    //   const index: number = this.posts.indexOf(this.getPostId(id));
    //   this.posts.splice(index, 1);
    //   //dar para adicionar todos sem de novo sem aquele cara kk
    //   console.log(index);
    //   console.log(this.posts);
    // }
    
      return this.http.delete(PostService.url + '/' + id.id)
      .map((response: Response) => {
        const index: number = this.posts.indexOf(id);
        this.posts.splice(index, 1);
      })
      .catch((error: Response) => Observable.throw(error));
    }
  

  addLike(post: Post){
  return this.http.put(PostService.url+'/' + post.id, post)
  .map((response: Response) => {
    for (let i = 0; i < this.posts.length; i++) {
      if(this.posts[i].id == response.json().id){
        this.posts[i] = response.json();
      }
    }
  })
  .catch((error: Response) => Observable.throw(error));
  } //dizer para ele


  //percebi depois kk
  editarPost(post:Post){
    return this.http.put(PostService.url+'/' + post.id, post)
  .map((response: Response) => {
    for (let i = 0; i < this.posts.length; i++) {
      if(this.posts[i].id == response.json().id){
        this.posts[i] = response.json();
      }
    }
  })
  .catch((error: Response) => Observable.throw(error));
  }
}
