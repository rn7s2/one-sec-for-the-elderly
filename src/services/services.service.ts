import { Injectable } from '@nestjs/common'

@Injectable()
export class ServicesService {
  findAll() {
    return `This action returns all services`
  }

  findOne(id: number) {
    return `This action returns a #${id} service`
  }

  remove(id: number) {
    return `This action removes a #${id} service`
  }
}
