import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/components/household-list/household-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username: String) {
    return this.http.get<Todo []>(`http://localhost:8080/users/${username}/todos`);
    //console.log("Execute Hello World Bean Service")
  }

  deleteTodo(username:string, id: number){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }
}
