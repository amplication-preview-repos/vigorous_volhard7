import { PaymentCreateNestedManyWithoutSubscriptionsInput } from "./PaymentCreateNestedManyWithoutSubscriptionsInput";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionCreateInput = {
  endDate?: Date | null;
  payments?: PaymentCreateNestedManyWithoutSubscriptionsInput;
  startDate?: Date | null;
  status?: "Option1" | null;
  subscriptionPlan?: SubscriptionPlanWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
