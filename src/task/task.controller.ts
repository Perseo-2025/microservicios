import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('task')
//@UsePipes(ValidationPipe)
export class TaskController {

    constructor(
        private readonly taskService: TaskService
    ){}

    @Get()
    getAllTask(){
        return this.taskService.findAll();
    }
    @Get(':id')
    getTaskById( @Param('id', ParseUUIDPipe) id :string){
        return this.taskService.findOneById(id);
    }

    @Post()
    createTask(@Body() createTask: CreateTaskDto){
        return createTask;
    }

    @Patch(':id')
    updateTask(@Param('id', ParseIntPipe) @Body() body: any){
        return body;
    }

    @Delete(':id')
    deleteTask(@Param('id', ParseIntPipe) id:number){
        return{
            msg: 'Delete OK ',id
        }
    }


}
