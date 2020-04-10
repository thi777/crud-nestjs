import { Injectable } from '@nestjs/common';
import { Task } from './task'
import { json } from 'express';

@Injectable()
export class TaskService {
    tasks: Task[] = [
        { id: 1, description: 'Tarefa 1', completed: false },
        { id: 2, description: 'Tarefa 2', completed: false },
        { id: 3, description: 'Tarefa 3', completed: false },
        { id: 4, description: 'Tarefa 4', completed: false },
        { id: 5, description: 'Tarefa 5', completed: false },
        { id: 6, description: 'Tarefa 6', completed: false },
    ];

    getAll() {
        return this.tasks
    }

    getById(id: number) {
        const task = this.tasks.find((value) => value.id == id)
        return task
    }

    create(task: Task) {
        let newTask = 0

        if (this.tasks.length > 0) {
            newTask = this.tasks[this.tasks.length - 1].id;
        }

        task.id = newTask + 1
        this.tasks.push(task) 

        return task
    }

    update(task: Task) {
        const changeTask = this.getById(task.id)
        if(changeTask){
            changeTask.description = task.description;
            changeTask.completed = task.completed
        } 

        return changeTask
    }

    delete(id: number) {
        const index = this.tasks.findIndex((value) => value.id == id)
        this.tasks.splice(index, 1)
    }
}
