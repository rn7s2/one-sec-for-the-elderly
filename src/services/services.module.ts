import { Module } from '@nestjs/common'
import { ServicesService } from './services.service'
import { ServicesController } from './services.controller'
import { Service } from './entities/service.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SubscribedService } from 'src/services/entities/subscribed-service.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Service, SubscribedService])],
  controllers: [ServicesController],
  providers: [ServicesService],
})
export class ServicesModule {}
