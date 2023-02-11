import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { jwtConstants } from './constants'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/users/entities/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    })
  }

  async validate(payload): Promise<{ id: any; username: any }> {
    let account = { id: payload.sub, username: payload.username }
    let res = await this.userRepository.findOneBy({
      id: account.id,
      phone: account.username,
    })
    if (res == null)
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
    return account
  }
}
