import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class Task {
  
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  name: string

  @Column()
  status: string
}