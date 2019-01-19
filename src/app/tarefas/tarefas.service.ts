import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from './Comments';


@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private http: HttpClient) { }


  listar () {
    return this.http.get<Comments[]>('http://localhost:3000/comments');
  }

}
