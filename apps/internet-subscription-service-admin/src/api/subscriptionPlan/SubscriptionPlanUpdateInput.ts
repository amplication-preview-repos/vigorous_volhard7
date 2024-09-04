import { SubscriptionUpdateManyWithoutSubscriptionPlansInput } from "./SubscriptionUpdateManyWithoutSubscriptionPlansInput";

export type SubscriptionPlanUpdateInput = {
  durationInMonths?: number | null;
  planDescription?: string | null;
  planName?: string | null;
  price?: number | null;
  subscriptions?: SubscriptionUpdateManyWithoutSubscriptionPlansInput;
};
