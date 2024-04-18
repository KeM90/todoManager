import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../components/household-list/household-list.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  id: number = 0;
  todo: Todo = new Todo(this.id, '', false,new Date()); 
  
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.todo = new Todo(this.id, '', false, new Date());

    this.todoService.retrieveTodo('manager', this.id)
      .subscribe(
        data => this.todo = data
    )

  }

  saveTodo() {
    this.todoService.updateTodo('manager', this.id, this.todo)
      .subscribe (
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )


  }

}


