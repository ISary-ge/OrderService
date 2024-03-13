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
import { NotificationsHistoryWhereInput } from "./NotificationsHistoryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { NotificationsHistoryOrderByInput } from "./NotificationsHistoryOrderByInput";

@ArgsType()
class NotificationsHistoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => NotificationsHistoryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => NotificationsHistoryWhereInput, { nullable: true })
  @Type(() => NotificationsHistoryWhereInput)
  where?: NotificationsHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: [NotificationsHistoryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [NotificationsHistoryOrderByInput], { nullable: true })
  @Type(() => NotificationsHistoryOrderByInput)
  orderBy?: Array<NotificationsHistoryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { NotificationsHistoryFindManyArgs as NotificationsHistoryFindManyArgs };
