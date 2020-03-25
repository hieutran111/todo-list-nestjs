import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from 'src/graphql.schema';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }
}
