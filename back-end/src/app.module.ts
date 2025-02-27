import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session, User } from 'src/entities';
import { SessionService, UserService } from 'src/services';
import { SessionController, UserController } from 'src/controllers';

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
