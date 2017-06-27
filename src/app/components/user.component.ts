import { Component } from '@angular/core';
import {Postservice} from '../services/post.service'

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [Postservice]
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  hobbies:string[];
  showHobbies: boolean;
  post: Post[];

  constructor(private postservice: Postservice ){
        this.name = 'Amit Jain';
        this.email ='amitjain.0716@gmail.com',
        this.address = {
            street:'11103 Hidden Trail Dr',
            city:'Owings Mills',
            state: 'MD',
            zip: 21117
        }
        this.hobbies = ['Cricket','Movies','Clubbing']
        this.showHobbies = false; 
        this.postservice.getPost().subscribe(post =>{

            this.post = post;

        })  

    
 }
 toggleHobbies(){
     if( this.showHobbies == true){ this.showHobbies = false;}
     else{this.showHobbies = true;}
    

 }
 addHobby(hobby:any){
    this.hobbies.push(hobby);

 }
 deleteHobby(i:any){
     this.hobbies.splice(i,1);
 }
}

interface address{
    street:string;
    city: string;
    state: string;
    zip: number;

}
interface Post{
    id:number;
    title: string;
    body: string;
   

}
 
 