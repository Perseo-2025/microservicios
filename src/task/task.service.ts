import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './interfaces/task.interfaces';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {

    private taks:Task[] = [
        {
            id: uuidv4(),
            nombre: 'Lavar la ropa',
            estado: 'completo',
        },
        {
            id: uuidv4(),
            nombre: 'preparar el almuerzo',
            estado: 'completo',
        },
        {
            id: uuidv4(),
            nombre: 'aprender nestjs',
            estado: 'en curso',
        },
    ];

    findAll(){
        return this.taks;
    }

    findOneById(id:string){
        const task = this.taks.find( task => task.id === id);
        if(!task) throw new NotFoundException(`Task with id '${id} not found'`);
        return task;
    
    }
}
