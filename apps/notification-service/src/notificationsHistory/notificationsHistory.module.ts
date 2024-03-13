import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NotificationsHistoryModuleBase } from "./base/notificationsHistory.module.base";
import { NotificationsHistoryService } from "./notificationsHistory.service";
import { NotificationsHistoryController } from "./notificationsHistory.controller";

@Module({
  imports: [NotificationsHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [NotificationsHistoryController],
  providers: [NotificationsHistoryService],
  exports: [NotificationsHistoryService],
})
export class NotificationsHistoryModule {}
