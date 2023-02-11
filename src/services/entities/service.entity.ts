import { ApiProperty } from '@nestjs/swagger'
import { type } from 'os'
import { SubscribedService } from 'src/services/entities/subscribed-service.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number

  @Column({ type: 'text' })
  @ApiProperty()
  name: string

  @Column({ type: 'text' })
  @ApiProperty()
  description: string

  @OneToMany((type) => SubscribedService, (service) => service.serviceId)
  subscribedServices: SubscribedService[]
}
