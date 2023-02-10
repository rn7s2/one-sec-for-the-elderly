import { ApiProperty } from '@nestjs/swagger'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number

  @Column()
  @ApiProperty()
  username: string

  @Column()
  @ApiProperty()
  password: string
}
