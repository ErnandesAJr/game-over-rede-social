export class Post{
    id:number;
    nomePessoa:string;
    texto:string;
    qtdLikes:number;
    
     constructor(qtdLikes:number,namePessoa:string,id:number,texto:string){
       this.nomePessoa = namePessoa;
       this.id = id;
       this.texto = texto;
       this.qtdLikes = qtdLikes;
     }
     
     getId():number{
       return this.id;
     }

     addLike(){
       this.qtdLikes ++;
     }

   }