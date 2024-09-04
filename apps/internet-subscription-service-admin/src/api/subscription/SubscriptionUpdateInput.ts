import { PaymentUpdateManyWithoutSubscriptionsInput } from "./PaymentUpdateManyWithoutSubscriptionsInput";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionUpdateInput = {
  endDate?: Date | null;
  payments?: PaymentUpdateManyWithoutSubscriptionsInput;
  startDate?: Date | null;
  status?: "Option1" | null;
  subscriptionPlan?: SubscriptionPlanWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
