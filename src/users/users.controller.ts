import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { LocalAuthGuard } from 'src/auth/local-auth.guard'
import { AuthService } from 'src/auth/auth.service'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { LoginUserDto } from './dto/login-user.dto'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @ApiOperation({ summary: '注册用户' })
  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto)
  }

  @ApiOperation({ summary: '用户登录' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    schema: {
      type: 'object',
      properties: {
        access_token: {
          type: 'string',
          default:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcmlhIiwic3ViIjoyLCJpYXQiOjE2NzYwNDgzMjUsImV4cCI6MTY3NjY1MzEyNX0.baNx_fP5BNIJPLnAE7qP2wXQC5axtJZUABXz3e3tdxc',
        },
      },
    },
  })
  async login(@Body() _: LoginUserDto, @Request() req) {
    return await this.authService.login(req.user)
  }
}
