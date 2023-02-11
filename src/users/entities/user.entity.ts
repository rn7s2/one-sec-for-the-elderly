import { ApiProperty } from '@nestjs/swagger'
import { SubscribedService } from 'src/services/entities/subscribed-service.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

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

  @OneToMany((type) => SubscribedService, (service) => service.phone)
  subscribedServices: SubscribedService[]
}
