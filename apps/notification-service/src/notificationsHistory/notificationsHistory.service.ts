import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NotificationsHistoryServiceBase } from "./base/notificationsHistory.service.base";

@Injectable()
export class NotificationsHistoryService extends NotificationsHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
