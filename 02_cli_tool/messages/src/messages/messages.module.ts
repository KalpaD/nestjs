import { Module } from '@nestjs/common';
import { MessagesController } from './controllers/messages.controller';
import { MessageRepository } from './repositories/messages.repository';
import { MessageService } from './services/messages.service';

@Module({
  controllers: [MessagesController],
  // things that are injectable as dependecis
  providers: [MessageService, MessageRepository]
})
export class MessagesModule {}
