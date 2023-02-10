import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './users/entities/user.entity'

@Module({
  imports: [
    AuthModule,
    UsersModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'osfe',
    //   password: 'osfe19260817',
    //   database: 'osfe',
    //   entities: [User],
    //   synchronize: true, // WARN 在生产环境中应当为 false
    // }),
  ],
})
export class AppModule {}
