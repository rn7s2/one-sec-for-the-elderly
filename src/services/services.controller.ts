import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiProperty,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { ServicesService } from './services.service'

class SubscribeParam {
  @ApiProperty()
  subscribed: boolean
}

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('services')
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @ApiOperation({
    description:
      '可带一个查询参数 subscribed, 值为 true 或 false 或不填. 如: GET /api/services?subscribed=true',
  })
  @ApiQuery({ name: 'subscribed', required: false, type: String })
  @Get()
  async findAll(@Query('subscribed') subscribed: string, @Request() req) {
    if (subscribed === 'true')
      return this.servicesService.findSubscribed(req.user.phone)
    else return this.servicesService.findAll()
  }

  @Patch(':id')
  async updateSubscribe(
    @Param('id') id: string,
    @Body() param: SubscribeParam,
    @Request() req,
  ) {
    if (param.subscribed)
      await this.servicesService.subscribe(+id, req.user.username)
    else await this.servicesService.unsubscribe(+id, req.user.username)
  }
}
