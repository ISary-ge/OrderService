import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NotificationsHistoryService } from "./notificationsHistory.service";
import { NotificationsHistoryControllerBase } from "./base/notificationsHistory.controller.base";

@swagger.ApiTags("notificationsHistories")
@common.Controller("notificationsHistories")
export class NotificationsHistoryController extends NotificationsHistoryControllerBase {
  constructor(
    protected readonly service: NotificationsHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
