import { ApiProperty } from '@nestjs/swagger'
import { Service } from 'src/services/entities/service.entity'
import { Column, Entity } from 'typeorm'

@Entity()
export class SubscribedService extends Service {
  @Column()
  @ApiProperty()
  serviceId: number

  @Column()
  @ApiProperty()
  phone: string

  @Column()
  @ApiProperty()
  lastSubscribeTime: Date
}
