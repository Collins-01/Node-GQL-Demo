// src/entities/User.ts

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;

  constructor() {
    // this.firstName = "";
    // this.lastName = "";
    // this.email = "";
    // this.id = 0;
  }
}
// npx typeorm init --name node-gql-demo --database postgres
