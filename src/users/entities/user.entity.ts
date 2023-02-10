import { ApiProperty } from '@nestjs/swagger'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number

  @Column()
  @ApiProperty()
  phone: string

  @Column()
  @ApiProperty()
  password: string

  @Column()
  @ApiProperty()
  name: string

  @Column()
  @ApiProperty()
  age: number
}
