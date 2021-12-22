import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habits</h2>
    <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
    <ul>
      <app-habit-item 
      *ngFor="let habit of habits | async"
      [habit]="habit"
      ></app-habit-item>
    </ul>
  `,
  styles: []
})
export class HabitListComponent implements OnInit {
  habits: Observable<any> | undefined;
  
  constructor(private habitService: HabitService){}
  
  ngOnInit(): void {
    this.habits = this.habitService.getHabits();
  }

   onAddHabit(newHabit:any) {
    this.habitService.addHabit(newHabit);
   }

}
