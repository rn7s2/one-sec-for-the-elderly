import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
    } as User,
    {
      id: 2,
      username: 'maria',
      password: 'guess',
    } as User,
  ]

  async create(createUserDto: CreateUserDto) {
    return 'This action adds a new user'
  }

  async findOne(username: string): Promise<User | null> {
    return this.users.find((user) => user.username === username)
  }
}
