import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      phone: '10010',
      password: 'unicom',
      name: 'China Unicom',
      age: 15,
    } as User,
  ]

  async create(createUserDto: CreateUserDto) {
    return 'This action adds a new user'
  }

  async findOne(phone: string): Promise<User | null> {
    return this.users.find((user) => user.phone === phone)
  }
}
