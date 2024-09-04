/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  SubscriptionPlan as PrismaSubscriptionPlan,
  Subscription as PrismaSubscription,
} from "@prisma/client";

export class SubscriptionPlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SubscriptionPlanCountArgs, "select">
  ): Promise<number> {
    return this.prisma.subscriptionPlan.count(args);
  }

  async subscriptionPlans(
    args: Prisma.SubscriptionPlanFindManyArgs
  ): Promise<PrismaSubscriptionPlan[]> {
    return this.prisma.subscriptionPlan.findMany(args);
  }
  async subscriptionPlan(
    args: Prisma.SubscriptionPlanFindUniqueArgs
  ): Promise<PrismaSubscriptionPlan | null> {
    return this.prisma.subscriptionPlan.findUnique(args);
  }
  async createSubscriptionPlan(
    args: Prisma.SubscriptionPlanCreateArgs
  ): Promise<PrismaSubscriptionPlan> {
    return this.prisma.subscriptionPlan.create(args);
  }
  async updateSubscriptionPlan(
    args: Prisma.SubscriptionPlanUpdateArgs
  ): Promise<PrismaSubscriptionPlan> {
    return this.prisma.subscriptionPlan.update(args);
  }
  async deleteSubscriptionPlan(
    args: Prisma.SubscriptionPlanDeleteArgs
  ): Promise<PrismaSubscriptionPlan> {
    return this.prisma.subscriptionPlan.delete(args);
  }

  async findSubscriptions(
    parentId: string,
    args: Prisma.SubscriptionFindManyArgs
  ): Promise<PrismaSubscription[]> {
    return this.prisma.subscriptionPlan
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .subscriptions(args);
  }
}
