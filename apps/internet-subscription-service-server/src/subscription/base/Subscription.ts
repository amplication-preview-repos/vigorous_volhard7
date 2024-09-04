/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsString,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Payment } from "../../payment/base/Payment";
import { EnumSubscriptionStatus } from "./EnumSubscriptionStatus";
import { SubscriptionPlan } from "../../subscriptionPlan/base/SubscriptionPlan";
import { User } from "../../user/base/User";

@ObjectType()
class Subscription {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Payment],
  })
  @ValidateNested()
  @Type(() => Payment)
  @IsOptional()
  payments?: Array<Payment>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate!: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumSubscriptionStatus,
  })
  @IsEnum(EnumSubscriptionStatus)
  @IsOptional()
  @Field(() => EnumSubscriptionStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => SubscriptionPlan,
  })
  @ValidateNested()
  @Type(() => SubscriptionPlan)
  @IsOptional()
  subscriptionPlan?: SubscriptionPlan | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { Subscription as Subscription };
