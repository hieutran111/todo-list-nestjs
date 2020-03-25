import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { TaskService } from "./task.service";
import { TaskInput, TaskUpdate } from "src/graphql.schema";

@Resolver('Task')
export class TaskResolver {
  constructor(
    private readonly taskService: TaskService
  ){}
  
  @Query('getAllTask')
  async getAllTask () {
    return await this.taskService.findAll()
  }

  @Query('getTaskById')
  async getTaskById (@Args('id') id: string) {
    return await this.taskService.findById(id)
  }

  @Mutation('addTask')
  async addTask (@Args('task') task: TaskInput) {
    return await this.taskService.create(task)
  }

  @Mutation('removeTask')
  async removeTask (@Args('id') id: string) {
    return await this.taskService.delete(id)
  }

  @Mutation('updateTask')
  async updateTask (@Args('taskUpdate') taskUpdate: TaskUpdate) {
    return await this.taskService.update(taskUpdate)
  }
}