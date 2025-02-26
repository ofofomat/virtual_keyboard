import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session, User } from './entities/index';
import { SessionService, UserService } from './services/index';
import { SessionController, UserController } from './controllers/index';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.db', 
    entities: [Session, User], 
    synchronize: true, 
  }),
  TypeOrmModule.forFeature([Session, User]),
],
  controllers: [SessionController, UserController],
  providers: [SessionService, UserService],
})
export class AppModule {}
