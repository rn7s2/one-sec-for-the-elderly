import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(
    phone: string,
    pass: string,
  ): Promise<{ id: number; phone: string }> {
    const user = await this.usersService.findOne(phone)
    if (user && user.password === pass) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: {
    phone: any
    id: any
  }): Promise<{ access_token: string }> {
    const payload = { username: user.phone, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
