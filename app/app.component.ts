// annotation, how it appears

import { Component } from '@angular/core';

// 'decorator'
@Component({
  selector: 'app-root',
  template: `
      <div class="container" >
        <div [class]="changeBackColor(backColor)">
            <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
            <hr>
              <h4>backColor = {{backColor}}</h4>
              <input name="back-color" type="radio" [(ngModel)]="backColor" [value]="1"> green<br>
              <input name="back-color" type="radio" [(ngModel)]="backColor" [value]="2"> blue<br>
              <input name="back-color" type="radio" [(ngModel)]="backColor" [value]="3"> pink<br>
            <hr>
            <h3>{{currentFocus}}</h3>
            <ul>
            <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}} <button (click)="editTask(currentTask)">Edit!</button></li>
            </ul>
            <hr>
        </div>
        <div>
          <div *ngIf="selectedTask">
            <h3>{{selectedTask.description}}</h3>
            <p>Task Complete? {{selectedTask.done}}</p>
            <hr>
            <h3>Edit Task</h3>
            <label>Enter Task Description:</label>
            <input [(ngModel)]="selectedTask.description">
            <label>Enter Task Priority (1-3):</label><br>
            <input name="task-color" type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low Priority)<br>
            <input name="task-color" type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority)<br>
            <input name="task-color" type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (High Priority)
            <button (click)="finishedEditing()">Done</button>
          </div>
        </div>
      </div>
    `
})


// class declaration, how it behaves
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 1),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 3)
  ];
  selectedTask: null;
  backColor: number = 0;

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    this.selectedTask = null;
  }

  isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      alert("This task is done!");
    } else {
      alert("This task is not done. Better get to work!");
    }
  }

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  changeBackColor(selectedColor) {
    if (selectedColor === 1) {
      return "green";
    } else if ( selectedColor === 2) {
      return  "blue";
    } else if ( selectedColor === 3) {
      return  "pink";
    } else {
      return 0;
    }
  }

}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }
}
