import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SignalConversationController } from './signal-conversation.controller';
import { SignalConversation } from './signal-conversation.model';
import { SignalConversationService } from './signal-conversation.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [SignalConversationController],
  providers: [SignalConversationService],
  imports: [SequelizeModule.forFeature([SignalConversation]), forwardRef(() => AuthModule)],
  exports: [SignalConversationService],
})
export class SignalConversationModule {}
