/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NotificationsHistoryWhereUniqueInput } from "./NotificationsHistoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { NotificationsHistoryUpdateInput } from "./NotificationsHistoryUpdateInput";

@ArgsType()
class UpdateNotificationsHistoryArgs {
  @ApiProperty({
    required: true,
    type: () => NotificationsHistoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NotificationsHistoryWhereUniqueInput)
  @Field(() => NotificationsHistoryWhereUniqueInput, { nullable: false })
  where!: NotificationsHistoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => NotificationsHistoryUpdateInput,
  })
  @ValidateNested()
  @Type(() => NotificationsHistoryUpdateInput)
  @Field(() => NotificationsHistoryUpdateInput, { nullable: false })
  data!: NotificationsHistoryUpdateInput;
}

export { UpdateNotificationsHistoryArgs as UpdateNotificationsHistoryArgs };
