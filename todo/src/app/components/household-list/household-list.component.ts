import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
    selector: 'app-list-todos',
    templateUrl: './household-list.component.html',
    styleUrls: ['.//household-list.component.css'],
})
export class HouseholdListComponent implements OnInit {

  todos: Todo[] = [];

  message: string = '';


  // = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit India', false, new Date())
  //   // {id : 1, description : },
  //   // {id : 2, description : ''},
  //   // {id : 3, description : 'Visit India'}
  // ]

  // todo = {
  //     id : 1,
  //     description: 'Learn to Dance'
  // }

  constructor(
    private todoService: TodoDataService,
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('manager').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: number) {
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('manager', id).subscribe (
      response=> {
        console.log(response);
        this.message = `Delete of Todo ${id} Succesful!`
        this.refreshTodos();

      }
    )
    }

}
