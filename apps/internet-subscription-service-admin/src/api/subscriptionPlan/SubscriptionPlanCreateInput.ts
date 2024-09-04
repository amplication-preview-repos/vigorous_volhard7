import { SubscriptionCreateNestedManyWithoutSubscriptionPlansInput } from "./SubscriptionCreateNestedManyWithoutSubscriptionPlansInput";

export type SubscriptionPlanCreateInput = {
  durationInMonths?: number | null;
  planDescription?: string | null;
  planName?: string | null;
  price?: number | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutSubscriptionPlansInput;
};
