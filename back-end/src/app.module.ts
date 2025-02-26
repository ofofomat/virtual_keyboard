import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from './session.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.db', 
    entities: [Session], 
    synchronize: true, 
  }),
  TypeOrmModule.forFeature([Session]),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
