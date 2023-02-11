import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { SubscribedService } from 'src/services/entities/subscribed-service.entity'
import { Repository } from 'typeorm'
import { Service } from './entities/service.entity'

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private servicesRepo: Repository<Service>,
    @InjectRepository(SubscribedService)
    private subscribedServicesRepo: Repository<SubscribedService>,
  ) {}

  async findAll(): Promise<Service[]> {
    return this.servicesRepo.find()
  }

  async findSubscribed(phone: string): Promise<SubscribedService[]> {
    return this.subscribedServicesRepo.findBy({ phone })
  }

  async subscribe(id: number, phone: string): Promise<void> {
    let service = await this.servicesRepo.findOneBy({ id })
    if (service == null)
      throw new HttpException('Service not found.', HttpStatus.NOT_FOUND)

    let subscribed = await this.subscribedServicesRepo.findOneBy({
      serviceId: id,
      phone,
    })
    if (subscribed == null) {
      await this.subscribedServicesRepo.insert({
        serviceId: id,
        phone,
        lastSubscribeTime: new Date().toISOString(),
        name: service.name,
        description: service.description,
      })
    }
  }

  async unsubscribe(id: number, phone: string): Promise<void> {
    await this.subscribedServicesRepo.delete({ serviceId: id, phone })
  }
}
