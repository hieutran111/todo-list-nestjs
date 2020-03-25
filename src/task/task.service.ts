import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { TaskInput, TaskUpdate,Task } from 'src/graphql.schema';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: MongoRepository<Task>,
  ){}
  async findAll (): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findById (id: string): Promise<Task> {
    return await this.taskRepository.findOne(id)
  }

  async create (taskInput: TaskInput): Promise<Task> {
    return await this.taskRepository.save(taskInput)
  }

  async delete (id: string): Promise<Task> {
    let taskremove = await this.taskRepository.findOne(id)
    if (taskremove) {
      await this.taskRepository.delete(id)
      return taskremove
    }
    return null
  }

  async update (taskUpdate: TaskUpdate): Promise<Task> {
    if(await this.taskRepository.findOne(taskUpdate.id)){
      await this.taskRepository.update(taskUpdate.id, taskUpdate)
      return taskUpdate
    }
    return null
  } 
}
