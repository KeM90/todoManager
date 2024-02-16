import { Component, OnInit} from '@angular/core';

export class List {
  constructor(
    public id: number,
    public room: string,
    public description: string,
    public done: boolean,
    public targetDate: Date,
  ){
    
  }
}

@Component({
  selector: 'app-household-list',
  templateUrl: './household-list.component.html',
  styleUrls: ['./household-list.component.css']
})
export class HouseholdListComponent implements OnInit{
  

    lists = [
      new List(1, 'living room', 'vacuum', false, new Date()),
      new List(2, 'kitchen', 'wash', false, new Date()),
      new List(3, 'bath', 'cleaning', false, new Date()),
      
    ]
   

  constructor() { }

  ngOnInit() {
      
  }

}
