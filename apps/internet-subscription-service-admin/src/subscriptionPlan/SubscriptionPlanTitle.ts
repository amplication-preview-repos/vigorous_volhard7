import { SubscriptionPlan as TSubscriptionPlan } from "../api/subscriptionPlan/SubscriptionPlan";

export const SUBSCRIPTIONPLAN_TITLE_FIELD = "planName";

export const SubscriptionPlanTitle = (record: TSubscriptionPlan): string => {
  return record.planName?.toString() || String(record.id);
};
