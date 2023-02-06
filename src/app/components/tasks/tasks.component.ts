import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(t => this.tasks = t)
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(t => this.tasks = t)
  }

  toggleReminder(task: Task) {
    this.taskService.toggleReminder(task).subscribe(id => task.reminder = !task.reminder)
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(t => this.tasks.push(t))
  }
}
