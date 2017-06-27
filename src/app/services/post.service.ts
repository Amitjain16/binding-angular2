import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Postservice {
    constructor(private http:Http){
        console.log('post init')

    }
    getPost(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json())

    }


}