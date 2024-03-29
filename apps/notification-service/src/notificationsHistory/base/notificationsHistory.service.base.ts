/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, NotificationsHistory } from "@prisma/client";

export class NotificationsHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.NotificationsHistoryCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationsHistoryCountArgs>
  ): Promise<number> {
    return this.prisma.notificationsHistory.count(args);
  }

  async notificationsHistories<
    T extends Prisma.NotificationsHistoryFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.NotificationsHistoryFindManyArgs>
  ): Promise<NotificationsHistory[]> {
    return this.prisma.notificationsHistory.findMany(args);
  }
  async notificationsHistory<
    T extends Prisma.NotificationsHistoryFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.NotificationsHistoryFindUniqueArgs>
  ): Promise<NotificationsHistory | null> {
    return this.prisma.notificationsHistory.findUnique(args);
  }
  async createNotificationsHistory<
    T extends Prisma.NotificationsHistoryCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.NotificationsHistoryCreateArgs>
  ): Promise<NotificationsHistory> {
    return this.prisma.notificationsHistory.create<T>(args);
  }
  async updateNotificationsHistory<
    T extends Prisma.NotificationsHistoryUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.NotificationsHistoryUpdateArgs>
  ): Promise<NotificationsHistory> {
    return this.prisma.notificationsHistory.update<T>(args);
  }
  async deleteNotificationsHistory<
    T extends Prisma.NotificationsHistoryDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.NotificationsHistoryDeleteArgs>
  ): Promise<NotificationsHistory> {
    return this.prisma.notificationsHistory.delete(args);
  }
}
