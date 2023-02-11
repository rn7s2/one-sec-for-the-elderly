import { OmitType } from '@nestjs/swagger'
import { User } from '../entities/user.entity'

export class LoginUserDto extends OmitType(User, [
  'id',
  'name',
  'age',
] as const) {}
