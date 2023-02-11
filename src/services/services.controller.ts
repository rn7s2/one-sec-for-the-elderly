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
} from '@nestjs/common'
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger'
import { ServicesService } from './services.service'

class SubscribeParam {
  @ApiProperty()
  subscribed: boolean
}

@ApiTags('services')
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @ApiOperation({
    description:
      '可带一个查询参数 subscribed, 值为 true 或 false 或不填. 如: GET /api/services?subscribed=true',
  })
  @Get()
  findAll(@Query('subscribed') subscribed: boolean) {
    return this.servicesService.findAll()
  }

  @Patch(':id')
  async updateSubscribe(
    @Param('id') id: string,
    @Body() param: SubscribeParam,
  ) {}
}
