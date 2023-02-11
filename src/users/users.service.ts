import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './entities/user.entity'
import { hash, hashSync } from 'bcrypt'

@Injectable()
export class UsersService {
  private readonly saltRound = 10

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return this.usersRepository.insert({
      phone: createUserDto.phone,
      password: await hash(createUserDto.password, this.saltRound),
      name: createUserDto.name,
      age: createUserDto.age,
    })
  }

  async findOne(phone: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ phone })
  }
}
